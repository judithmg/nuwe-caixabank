import { StyleSheet } from 'react-native';

import * as Colors from '../../constants/colors';
import * as Fonts from '../../constants/fonts';

export default StyleSheet.create({
  container: {},
  differenceText: {
    color: Colors.red,
    fontSize: 12,
  },
  increaseColor: {
    color: Colors.green,
  },
  title: {
    fontSize: 24,
    fontWeight: Fonts.weightBold,
  },
  titleText: {
    color: Colors.gray,
    fontSize: 12,
  },
  totalText: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: Fonts.weightBold,
  },
});

export const div = {
  width: '100%',
};
