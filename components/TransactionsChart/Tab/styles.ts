import { StyleSheet } from 'react-native';

import * as Colors from '../../../constants/colors';

export default StyleSheet.create({
  activeTab: {
    borderBottomColor: Colors.nightBlue,
    borderBottomWidth: 5,
  },
  container: {
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  text: {
    color: Colors.nightBlue,
    fontSize: 12,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
