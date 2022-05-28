import { StyleSheet } from 'react-native';

import * as Colors from '../../constants/colors';
import * as Fonts from '../../constants/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 18,
    paddingVertical: 24,
  },
  containerWeb: {
    flexDirection: 'row',
  },
  subtitle: {
    color: Colors.stratos,
    fontSize: 14,
    fontWeight: Fonts.weightMedium,
  },
  title: {
    color: Colors.stratos,
    fontSize: 24,
    fontWeight: Fonts.weightMedium,
  },
  titleContainer: {
    marginVertical: 18,
  },
  transactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  webContainer: {
    width: '70%',
  },
  webMargin: {
    borderColor: Colors.lightGray,
    borderRadius: 10,
    borderWidth: 1,
    margin: 20,
    padding: 20,
  },
});
