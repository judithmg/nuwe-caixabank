import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { View } from 'react-native';

import pieData from './constants';
import styles from './styles';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  return (
    <View style={styles.container}>
      <Pie data={pieData} />
    </View>
  );
};

export default PieChart;
