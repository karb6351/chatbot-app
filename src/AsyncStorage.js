import { AsyncStorage } from "react-native";

const asyncStorage = {
  async get(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      return JSON.parse(value);
    } catch (err) {
      console.log(err);
      return null;
    }
  },
  async set(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  async remove(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      await AsyncStorage.removeItem(key);
      return JSON.parse(value);
    } catch (err) {
      console.log(err);
      return null;
    }
  }
};

export default asyncStorage;
