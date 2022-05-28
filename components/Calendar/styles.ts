import { StyleSheet } from 'react-native';

import * as Colors from '../../constants/colors';

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.transparent,
    borderColor: Colors.lightGray,
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: 'row',
    fontSize: 12,
    justifyContent: 'space-around',
    width: 130,
  },
  buttonText: {
    // color: Colors.night,
  },
  calendar: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  container: {
    alignSelf: 'flex-end',
  },
});
