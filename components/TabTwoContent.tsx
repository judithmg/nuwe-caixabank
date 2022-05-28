import { StyleSheet, Text, View } from 'react-native';

import * as Colors from '../constants/colors';

const styles = StyleSheet.create({
  codeContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  container: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  subtitle: {
    color: Colors.night,
    marginVertical: 7,
  },
  title: {
    color: Colors.night,
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
});

const TabTwoContent: React.FC = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>You found another tab!</Text>

        <View style={[styles.codeContainer, styles.subtitle]}>
          <Text>Here more content can be rendered</Text>
        </View>

        <Text style={styles.subtitle}>
          Not much to see here! But here would be the ideal place to find a user
          profile 🎉
        </Text>
      </View>
    </View>
  );
};

export default TabTwoContent;
