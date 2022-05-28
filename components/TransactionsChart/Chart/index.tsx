import { useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

import { getWindowWidth } from '../../../config/styles';
import { chartConfig, data } from './constants';
import styles from './styles';
import { Props } from './types';

const WINDOW_WIDTH = getWindowWidth();

const TransactionsChart: React.FC<Props> = ({}) => {
  const [width, setWidth] = useState<number>(WINDOW_WIDTH * 0.8);

  const onLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setWidth(width);
  };

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
          style={{
            borderRadius: 16,
            marginVertical: 8,
          }}
        />
      </View>
    </View>
  );
};

export default TransactionsChart;
