import { StyleSheet } from 'react-native';

import * as Colors from '../../constants/colors';
import * as Fonts from '../../constants/fonts';

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    borderColor: Colors.lightGray,
    borderRadius: 10,
    borderWidth: 1,
    padding: 20,
    width: '90%',
  },
  text: {
    color: Colors.night,
    fontSize: 24,
    fontWeight: Fonts.weightBold,
    marginVertical: 12,
  },
});
