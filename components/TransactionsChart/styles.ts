import { StyleSheet } from 'react-native';

import * as Colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
