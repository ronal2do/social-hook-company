import { Platform, NativeModules } from 'react-native';
import Polyglot from 'node-polyglot';
import { enUS, ptBR } from 'config/locales';

let { language } = navigator;

if(Platform.OS === 'android') language = NativeModules.I18nManager.localeIdentifier;
else if(Platform.OS === 'ios') language = NativeModules.SettingsManager.settings.AppleLocale;

const polyglot = new Polyglot({ phrases: language.includes('en-US') ? enUS : ptBR });
export default polyglot.t.bind(polyglot);
