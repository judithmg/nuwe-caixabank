import { Text, View } from 'react-native';

import styles from './styles';
import { Props } from './types';

const TransactionsChart: React.FC<Props> = ({
  number,
  date,
  title = "Transactions",
}) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.transactionsText}>{number}</Text>
      <Text style={styles.subtitle}>{date}</Text>
    </View>
  );
};

export default TransactionsChart;
