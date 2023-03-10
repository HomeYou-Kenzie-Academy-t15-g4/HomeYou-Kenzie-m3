import * as yup from 'yup';

export const RegisterFormSchema = yup.object({
  name: yup.string().required('Inserir um nome é obrigatório!'),

  email: yup
    .string()
    .email('O e-mail digitado é invalido')
    .required('E-mail é obrigatório!'),

  password: yup
    .string()
    .required('Senha obrigatória!')
    .matches(/(\d)/, 'Deve conter pelo menos um número')
    .matches(/[a-z]/, 'Deve conter pelo menos uma letra minuscula')
    .matches(/.{6,}/, 'Deve conter pelo menos 6 caracteres'),

  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref('password')],
      'Senha incorreta, por favor insira uma senha igual a anterior'
    ),
  age: yup.string().required('Informe sua idade'),
});
