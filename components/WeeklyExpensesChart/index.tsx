import { CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Text, View } from 'react-native';

import Calendar from '../Calendar';
import { data, options, total } from './constants';
import styles from './styles';

Chart.register(
  CategoryScale,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
);

const increaseOrDecrease = total > 0;

const WeeklyExpensesChart = () => {
  return (
    <View style={styles.container}>
      <Calendar />
      <Text style={styles.title}>Weekly expenses</Text>
      <Line options={options} data={data} />
      <View>
        <Text style={styles.titleText}>Total revenue</Text>
        <Text style={styles.totalText}>${total}</Text>
        <Text
          style={[
            styles.differenceText,
            increaseOrDecrease && styles.increaseColor,
          ]}>
          7.00 %
        </Text>
      </View>
    </View>
  );
};
export default WeeklyExpensesChart;
