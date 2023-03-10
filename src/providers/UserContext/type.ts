import { IRegisterForm } from '../../components/Forms/RegisterForm';

export interface IUserProviderProps {
  children: React.ReactNode;
}

export interface IUserContext {
  userLoad: () => Promise<void>;
  createUser: (data: IRegisterForm) => void;
  loginUser: (formData: ILoginFormValue) => Promise<void>;
  logoutUser: () => void;
  user: IUser | null;
  editUser: (data: IUser) => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  age: number;
  city?: string;
  state?: string;
  photo?: string;
  img?: string;
}

export interface ILoginFormValue {
  email: string;
  password: string;
}
