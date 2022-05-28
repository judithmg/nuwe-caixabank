import { useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import { getWindowWidth } from '../../../config/global';
import { chartConfig, dailyData, monthlyData } from './constants';
import styles from './styles';
import { Props } from './types';

const WINDOW_WIDTH = getWindowWidth();

const TransactionsChart: React.FC<Props> = ({ type }) => {
  const [width, setWidth] = useState<number>(WINDOW_WIDTH * 0.8);

  const onLayout = (event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width);
  };

  const chartStyle = {
    borderRadius: 16,
    marginVertical: 8,
  };

  const data = type === 'monthly' ? monthlyData : dailyData;

  return (
    <View style={styles.container}>
      <View onLayout={onLayout}>
        <LineChart
          data={data}
          width={width}
          height={220}
          yAxisInterval={1}
          chartConfig={chartConfig}
          bezier
          style={chartStyle}
        />
      </View>
    </View>
  );
};

export default TransactionsChart;
