import { AsyncStorage } from 'react-native';

class Storage {
  clear = () => AsyncStorage.clear();
  get = async key => JSON.parse(await AsyncStorage.getItem(key));
  set = (key, value) => AsyncStorage.setItem(key, JSON.stringify(value));
  remove = key => AsyncStorage.removeItem(key);
}

export default new Storage();
