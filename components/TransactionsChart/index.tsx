import { useState } from 'react';
import { View } from 'react-native';

import Chart from './Chart';
import styles from './styles';
import Tab from './Tab';
import { ActiveView, Props } from './types';

const TransactionsChart: React.FC<Props> = () => {
  const [activeView, setActiveView] = useState<ActiveView>('monthly');

  const onPress = (view: ActiveView): void => {
    setActiveView(view);
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.tabsContainer}>
          <Tab
            active={activeView === 'daily'}
            onPress={() => onPress('daily')}
            view="daily"
          />
          <Tab
            active={activeView === 'monthly'}
            onPress={() => onPress('monthly')}
            view="monthly"
          />
        </View>
      </View>
      {activeView === 'daily' ? (
        <Chart type="daily" />
      ) : (
        <Chart type="monthly" />
      )}
    </View>
  );
};

export default TransactionsChart;
