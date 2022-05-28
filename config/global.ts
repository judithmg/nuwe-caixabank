import { Dimensions, Platform } from 'react-native';

// eslint-disable-next-line import/prefer-default-export
export const isWeb = Platform.OS === 'web';
export const getWindowWidth = () => Dimensions.get('window').width;
