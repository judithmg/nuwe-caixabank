import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Text, View } from 'react-native';

import { data, options } from './constants';
import styles from './styles';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Conversion</Text>
      <Pie data={data} options={options} />
    </View>
  );
};

export default PieChart;
