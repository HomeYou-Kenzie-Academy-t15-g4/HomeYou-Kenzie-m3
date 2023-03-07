import { createContext, useState } from 'react';
import {
  ILoginFormValue,
  IUser,
  IUserContext,
  IUserProviderProps,
} from './type';
import { api } from '../../services/api';
import { IRegisterForm } from '../../components/Forms/RegisterForm';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  const userLoad = async () => {
    const token = localStorage.getItem('@HomeYou:TOKEN');
    if (token) {
      try {
        const res = await api.get(`/users/${token}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);

        return navigate('/dashboard');
      } catch (error) {
        console.log(error);
        localStorage.removeItem('@HomeYou:TOKEN');
        return navigate('/');
      }
    }
  };

  const getAge = (dateString: string | number) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const createUser = async (data: IRegisterForm) => {
    const newData = {
      email: data.email,
      name: data.name,
      age: getAge(data.age),
      password: data.password,
      img: 'https://canvas.kenzie.com.br/images/messages/avatar-50.png',
    };
    if (newData.age < 18) {
      console.log('É preciso ter mais de 18 anos para se cadastrar');
    } else {
      try {
        const res = await api.post('/users', newData);
        console.log('deu certo', newData);
        toast.success('Cadastro realizado com sucesso!');
        navigate('/');
      } catch (error) {
        console.log('deu errado');
        toast.error('Ops,algo deu errado!');
      }
    }
  };

  const loginUser = async (formData: ILoginFormValue) => {
    try {
      const res = await api.post('/login', formData);
      localStorage.setItem('@HomeYou:TOKEN', res.data.accessToken);
      setUser(res.data.user);
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
      // toast.error(error.response.data)
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('@HomeYou:TOKEN');
    navigate('/');
  };

  const editUser = async (data: IUser, userId: string) => {
    try {
      const response = await api.patch(`/users/${userId}`, data);
      setUser(response.data.user);
      console.log('ok!');
      ///toast
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <UserContext.Provider
        value={{ user, userLoad, createUser, loginUser, logoutUser, editUser }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
