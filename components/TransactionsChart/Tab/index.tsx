import { Pressable, Text, View } from 'react-native';

import styles from './styles';
import { TabProps } from './types';

const Tab: React.FC<TabProps> = ({ active, onPress, view }) => (
  <Pressable onPress={onPress}>
    <View style={[styles.container, active && styles.activeTab]}>
      <Text style={styles.text}>{view}</Text>
    </View>
  </Pressable>
);

export default Tab;
