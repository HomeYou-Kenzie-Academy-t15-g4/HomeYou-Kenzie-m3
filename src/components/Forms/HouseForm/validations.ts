import * as yup from 'yup';

export const houseSchema = yup.object().shape({
  name: yup
    .string()
    .max(45, `Deve ter no máximo 45 letras`)
    .required('Campo Obrigatório'),
  city: yup.string().required('Campo Obrigatório'),
  state: yup.string().required('Campo Obrigatório'),
  photos: yup
    .array()
    .min(3, 'Adicione no minimo 3 fotos')
    .of(yup.string())
    .required('Campo Obrigatório'),
  dailyPrice: yup
    .number()
    .typeError('Campo Obrigatório')
    .positive('É preciso informar um valor positivo')
    .required(),
  singleBed: yup
    .number()
    .typeError('Campo Obrigatório')
    .integer('É preciso informar um numero inteiro')
    .required('Campo Obrigatório'),
  doubleBed: yup
    .number()
    .typeError('Campo Obrigatório')
    .integer('É preciso informar um numero inteiro')
    .required('Campo Obrigatório'),
  services: yup
    .array()
    .min(3, 'Selecione no minimo 3 opções')
    .of(yup.string())
    .required('Campo Obrigatório'),
  houseDesc: yup
    .string()
    .min(200, 'Deve conter no minimo 200 caracteres')
    .max(550, 'Deve conter no máximo 550 caracteres')
    .required('Campo Obrigatório'),
});
