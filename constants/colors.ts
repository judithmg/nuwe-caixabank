const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
export const black = '#000';
export const fog = '#F2F6F9';
export const gray = '#B2B2B2';
export const green = '#4AAF05';
export const lightGray = '#E5E5E5';
export const night = '#333333';
export const nightBlue = '#6979F8';
export const nightBlue10 = '#6979F8';
export const purple = 'rgba(74, 53, 197, 1)';
export const purple20 = 'rgba(74, 53, 197, .2)';
export const red = '#a11d33';
export const stratos = '#00093E';
export const tab = '#2D14C4';
export const tab50 = 'rgba(231, 241, 255, 0.53)';
export const transparent = 'transparent';
export const white = '#fff';
export const wool = '#171725';

export default {
  dark: {
    // darktheme here
    background: night,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    text: white,
    tint: tintColorDark,
  },
  light: {
    background: fog,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    text: stratos,
    tint: tintColorLight,
  },
};
