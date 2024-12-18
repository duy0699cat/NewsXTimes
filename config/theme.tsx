import {ThemeConfig} from '../types/theme';
//Implement the theme
const theme: ThemeConfig = {
  light: {
    theme: 'light',
    backColor: '#181818',
    headerColor: '#212121',
    bottomTabColor: '#172A46',
    cardBackground: '#212121',
    textColor: 'white',
    statusColor: '#181818',
    toggleBackColor: '#2C2C2C',
    iconColor: '#ffffff',
    themeBack: '#C5EFF9',
  },
  dark: {
    theme: 'dark',
    headerColor: '#DA3349',
    bottomTabColor: 'white',
    cardBackground: 'white',
    textColor: 'black',
    statusColor: '#AF2235',
    toggleBackColor: '#FF055D',
    iconColor: '#ffffff',
    themeBack: '#fcf8f8',
  },
};

export default theme;
