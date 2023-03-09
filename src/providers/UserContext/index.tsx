import { createContext, useEffect, useState } from 'react';
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
        const res = await api.get(`/users/${user?.id}`, {
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

  useEffect(() => {
    const token = localStorage.getItem('@HomeYou:TOKEN');
    const userAuxString = localStorage.getItem('@HomeYou:user');
    const userAux = userAuxString !== null ? JSON.parse(userAuxString) : null;
    if (token && userAux) {
      const userAutoLogin = async () => {
        try {
          const res = await api.get(`/users/${userAux.id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(res.data.user);
          if (
            window.location.pathname != '/dasboard' &&
            window.location.pathname != '/house' &&
            window.location.pathname != '/'
          ) {
            navigate('/');
          }
        } catch (error) {
          window.localStorage.clear();
          setUser(null);
          toast.error(
            'Não encontramos uma sessão ativa, por favor faça o login para acessar'
          );
          if (window.location.pathname != '/register') {
            navigate('/login');
          }
        }
      };
      userAutoLogin();
    }
  }, []);

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
        localStorage.setItem('@IDUSER', res.data.user.id);
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
      console.log(res.data.user);

      localStorage.setItem('@HomeYou:User', JSON.stringify(res.data.user));
      setUser(res.data.user);
      navigate('/dashboard');
      console.log('logou');
    } catch (error) {
      console.log('falhou');
      console.log(error);
      // toast.error(error.response.data)
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('@HomeYou:TOKEN');
    navigate('/');
  };

  const editUser = async (data: IUser) => {
    const id = localStorage.getItem('@IDUSER');
    const token = localStorage.getItem('@HomeYou:TOKEN');
    try {
      const response = await api.patch(`/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
        value={{
          user,
          userLoad,
          createUser,
          loginUser,
          logoutUser,
          editUser
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
