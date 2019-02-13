import DeviceInfo from 'react-native-device-info';
import asyncStorage from '../AsyncStorage';
import { IDNETIFIER } from '../constant';

export const getIdentifier = () => {
  return DeviceInfo.getUniqueID();
}

export const register = async () => {
  try{
    const id = await asyncStorage.get(IDNETIFIER);
    if (!id){
      const id = getIdentifier();
      await asyncStorage.set(IDNETIFIER, id);
    }
  }catch(error){
    console.log(error.message);
  }	
}