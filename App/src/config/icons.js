import { Platform } from 'react-native';
import iconFont from 'react-native-vector-icons/Fonts/Ionicons.ttf';

if(Platform.OS === 'web') {
  const iconFontStyles = `@font-face {
    src: url(${iconFont});
    font-family: Ionicons;
  }`;

  const style = document.createElement('style');
  style.type = 'text/css';

  if(style.styleSheet) style.styleSheet.cssText = iconFontStyles;
  else style.appendChild(document.createTextNode(iconFontStyles));

  document.head.appendChild(style);
}
