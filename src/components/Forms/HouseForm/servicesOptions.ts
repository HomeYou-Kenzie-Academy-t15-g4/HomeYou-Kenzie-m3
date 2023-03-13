export interface IservicesOptions {
  value: string;
  label: string;
}

export const servicesOptions = [
  { value: 'Wi-Fi', label: 'Wi-Fi' },
  { value: 'Cozinha', label: 'Cozinha' },
  { value: 'Ar-Condicionado', label: 'Ar-Condicionado' },
  { value: 'Piscina', label: 'Piscina' },
  { value: 'Fogueira', label: 'Fogueira' },
  { value: 'Churrasqueira', label: 'Churrasqueira' },
  { value: 'Chuveiro Externo', label: 'Chuveiro Externo' },
  { value: 'Kit de primeiros socorros', label: 'Kit de primeiros socorros' },
  { value: 'Vista para a praia', label: 'Vista para a praia' },
  { value: 'Vista para as montanhas', label: 'Vista para as montanhas' },
  { value: 'Quintal', label: 'Quintal' },
  { value: 'Garagem privada', label: 'Garagem privada' },
  { value: 'Estacionamento gratuito na rua', label: 'Estacionamento gratuito na rua' },
  { value: 'Banheira', label: 'Banheira' },
  { value: 'Materiais de higiene', label: 'Materiais de higiene' },
  { value: 'Sabonete corporal', label: 'Sabonete corporal' },
  { value: 'Xampu', label: 'Xampu' },
  { value: 'Roupas de cama', label: 'Roupas de cama' },
  { value: 'Ferro de passar', label: 'Ferro de passar' },
  { value: 'TV', label: 'TV' },
  { value: 'Berço', label: 'Berço' },
  { value: 'Aquecedor', label: 'Aquecedor' },
  { value: 'Cameras de segurança', label: 'Cameras de segurança' },
  { value: 'Microondas', label: 'Microondas' },
  { value: 'Cafeteira', label: 'Cafeteira' },
  { value: 'Rede', label: 'Rede' },
  { value: 'Permitido animais', label: 'Permitido animais' },
  { value: 'Fechadura inteligente', label: 'Fechadura inteligente' },
  { value: 'Liquidificador', label: 'Liquidificador' },
  { value: 'Ventilador de teto', label: 'Ventilador de teto' },
  { value: 'Ventiladores portáteis', label: 'Ventiladores portáteis' },
  { value: 'Taças de vinho', label: 'Taças de vinho' },
  { value: 'Blackout nas cortinas', label: 'Blackout nas cortinas' },
  { value: 'Livros e material de leitura', label: 'Livros e material de leitura' },
  { value: 'Cofre', label: 'Cofre' },
  { value: 'Limpeza disponível durante a estadia', label: 'Limpeza disponível durante a estadia' },
  { value: 'Espaço de trabalho', label: 'Espaço de trabalho' },
  { value: 'Torradeira', label: 'Torradeira' }
]

export const defaultNoValues = {
  name: '',
  photos: null,
  state: '',
  city: '',
  daylyPrice: '',
  singleBed: '',
  doubleBed: '',
  services: [],
  houseDesc: '',
};