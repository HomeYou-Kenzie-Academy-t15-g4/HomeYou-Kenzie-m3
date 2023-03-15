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
  const [loading, setLoading] = useState(false);
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
        localStorage.removeItem('@HomeYou:TOKEN');
        return navigate('/');
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('@HomeYou:TOKEN');
    const userAuxString = localStorage.getItem('@HomeYou:User');
    const userAux = userAuxString !== null ? JSON.parse(userAuxString) : null;
    if (token && userAux) {
      const userAutoLogin = async () => {
        try {
          const res = await api.get(`/users/${userAux.id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(res.data);
          if (
            window.location.pathname != '/dashboard' &&
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
    setLoading(true);
    const newData = {
      email: data.email,
      name: data.name,
      age: getAge(data.age),
      password: data.password,
      img: 'https://cdn.discordapp.com/attachments/1080736903537639494/1085117335439937576/5766b8e3-5b64-4b79-87c0-067818bf66bf.jpg',
    };

    if (newData.age < 18) {
      toast.error('É preciso ter mais de 18 anos para se cadastrar');
    } else {
      try {
        const res = await api.post('/users', newData);
        localStorage.setItem('@IDUSER', res.data.user.id);
        toast.success('Cadastro realizado com sucesso!');
        navigate('/login');
      } catch (error: any) {
        if (error?.response?.data == 'Email already exists') {
          toast.error('Email já cadastrado');
        } else {
          console.error(error);
          toast.error('Ops,algo deu errado!');
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const loginUser = async (formData: ILoginFormValue) => {
    setLoading(true);
    try {
      const res = await api.post('/login', formData);
      localStorage.setItem('@HomeYou:TOKEN', res.data.accessToken);
      toast.success('Login bem sucedido');

      localStorage.setItem('@HomeYou:User', JSON.stringify(res.data.user));
      setUser(res.data.user);
      navigate('/');
    } catch (error: any) {
      if (error.response.data === 'Incorrect password' || 'Cannot find user') {
        toast.error('Email e/ou senha incorretos');
      } else {
        console.error(error);
        toast.error('Algo deu errado :(');
      }
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('@HomeYou:TOKEN');
    toast.info('Sessão encerrada');
    navigate('/');
  };

  const editUser = async (data: IUser) => {
    setLoading(true);
    const userAuxString = localStorage.getItem('@HomeYou:User');
    const userAux = userAuxString !== null ? JSON.parse(userAuxString) : null;
    const token = localStorage.getItem('@HomeYou:TOKEN');

    try {
      const response = await api.patch(`/users/${userAux.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data.user);
      userLoad();
      toast.success('Alteração feita com sucesso!');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
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
          editUser,
          loading,
          setLoading,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
