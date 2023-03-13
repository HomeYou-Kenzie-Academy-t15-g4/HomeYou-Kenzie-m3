import { AiOutlineWifi } from "react-icons/ai";
import { TbToolsKitchen2, TbPhotoOff, TbFirstAidKit, TbBeach, TbIroning3, TbMicrowave } from "react-icons/tb";
import { FaShower, FaFan, FaUmbrellaBeach, FaBed, FaCar, FaToiletPaper } from "react-icons/fa";
import { RiPlantLine } from "react-icons/ri";
import { BiBlanket, BiWine } from "react-icons/bi";
import { BsCupHot, BsSafe2 } from "react-icons/bs";
import { SiMonkeytie } from "react-icons/si";
import { HiOutlineTv } from "react-icons/hi2";
import { GiMountainCave, GiToaster, GiDesk, GiMagicBroom, GiBlackBook, GiCctvCamera, GiHomeGarage, GiBathtub, GiSoap, GiThermometerHot } from "react-icons/gi";
import { IoIosSnow, IoMdBonfire, IoIosPaw } from "react-icons/io";
import { MdPool, MdOutlineCleanHands, MdCurtains, MdOutlineOutdoorGrill, MdOutlineBlender } from "react-icons/md";

interface IIconsMatchProps {
  iconName: string;
}

const IconsMatch = ({iconName}: IIconsMatchProps) => {
  return (
    (iconName == 'Wi-Fi') ? <AiOutlineWifi/>: 
    (iconName == 'Cozinha') ? <TbToolsKitchen2/>: 
    (iconName == 'Ar-Condicionado') ? <IoIosSnow/>: 
    (iconName == 'Piscina') ? <MdPool/>: 
    (iconName == 'Fogueira') ? <IoMdBonfire/>: 
    (iconName == 'Churrasqueira') ? <MdOutlineOutdoorGrill/>: 
    (iconName == 'Chuveiro Externo') ? <FaShower/>: 
    (iconName == 'Kit de primeiros socorros') ? <TbFirstAidKit/>: 
    (iconName == 'Vista para a praia') ? <TbBeach/>: 
    (iconName == 'Vista para as montanhas') ? <GiMountainCave/>: 
    (iconName == 'Quintal') ? <RiPlantLine/>: 
    (iconName == 'Estacionamento gratuito na rua') ? <FaCar/>: 
    (iconName == 'Garagem privada') ? <GiHomeGarage/>: 
    (iconName == 'Banheira') ? <GiBathtub/>: 
    (iconName == 'Materiais de higiene') ? <FaToiletPaper/>: 
    (iconName == 'Sabonete corporal') ? <GiSoap/>: 
    (iconName == 'Xampu') ? <MdOutlineCleanHands/>: 
    (iconName == 'Roupas de cama') ? <BiBlanket/>: 
    (iconName == 'Ferro de passar') ? <TbIroning3/>: 
    (iconName == 'TV') ? <HiOutlineTv/>: 
    (iconName == 'Berço') ? <FaBed/>: 
    (iconName == 'Aquecedor') ? <GiThermometerHot/>: 
    (iconName == 'Cameras de segurança') ? <GiCctvCamera/>: 
    (iconName == 'Microondas') ? <TbMicrowave/>: 
    (iconName == 'Cafeteira') ? <BsCupHot/>: 
    (iconName == 'Rede') ? <FaUmbrellaBeach/>: 
    (iconName == 'Permitido animais') ? <IoIosPaw/>: 
    (iconName == 'Fechadura inteligente') ? <SiMonkeytie/>: 
    (iconName == 'Liquidificador') ? <MdOutlineBlender/>: 
    (iconName == 'Ventilador de teto') ? <FaFan/>: 
    (iconName == 'Ventiladores portáteis') ? <FaFan/>: 
    (iconName == 'Taças de vinho') ? <BiWine/>: 
    (iconName == 'Blackout nas cortinas') ? <MdCurtains/>: 
    (iconName == 'Livros e material de leitura') ? <GiBlackBook/>: 
    (iconName == 'Cofre') ? <BsSafe2/>: 
    (iconName == 'Limpeza disponível durante a estadia') ? <GiMagicBroom/>: 
    (iconName == 'Espaço de trabalho') ? <GiDesk/>: 
    (iconName == 'Torradeira') ? <GiToaster/>
    : <TbPhotoOff/>
  )
}

export default IconsMatch