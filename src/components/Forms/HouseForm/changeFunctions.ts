import { useContext } from 'react';
import { HousesContext } from '../../../providers/HousesContext';

const { loadValues, setLoadValues } = useContext(HousesContext);

const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
  setLoadValues({
    ...loadValues,
    name: e.target.value,
  });
};
const changePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
  setLoadValues({
    ...loadValues,
    daylyPrice: Number(e.target.value),
  });
};
const changeBeds = (e: React.ChangeEvent<HTMLInputElement>) => {
  setLoadValues({
    ...loadValues,
    singleBed: Number(e.target.value),
  });
};
const changeDoubleBeds = (e: React.ChangeEvent<HTMLInputElement>) => {
  setLoadValues({
    ...loadValues,
    doubleBed: Number(e.target.value),
  });
};
const changeHouseDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  setLoadValues({
    ...loadValues,
    houseDesc: e.target.value,
  });
};

export {
  changeName,
  changePrice,
  changeBeds,
  changeDoubleBeds,
  changeHouseDesc,
};
