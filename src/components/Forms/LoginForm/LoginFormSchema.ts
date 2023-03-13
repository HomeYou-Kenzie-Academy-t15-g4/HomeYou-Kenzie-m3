import * as yup from 'yup';

export const LoginFormSchema = yup.object({
  email: yup
    .string()
    .required('E-mail é obrigatório!')
    .email('O e-mail digitado é invalido'),

  password: yup.string().required('Senha é obrigatório!'),
});
