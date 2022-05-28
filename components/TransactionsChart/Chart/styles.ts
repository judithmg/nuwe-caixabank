import { StyleSheet } from 'react-native';

import * as Colors from '../../../constants/colors';
import * as Fonts from '../../../constants/fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  shadow: {
    elevation: 9,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  subtitle: {
    color: Colors.gray,
    fontSize: 12,
    textTransform: "uppercase",
    textAlign: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: Fonts.weightBold,
    textAlign: "center",
  },
  transactionsText: {
    fontWeight: Fonts.weightMedium,
    color: Colors.nightBlue,
    fontSize: Fonts.h1Size,
    textAlign: "center",
    marginVertical: 12,
  },
});
