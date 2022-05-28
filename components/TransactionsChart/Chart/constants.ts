import Chance from 'chance';

import * as Colors from '../../../constants/colors';

const chance = new Chance();
const monthly = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const daily = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const chartConfig = {
  backgroundGradientFrom: Colors.white,
  backgroundGradientTo: Colors.white,
  color: (opacity = 1) => `rgba(105, 121, 248, ${opacity})`,
  decimalPlaces: 2,
  labelColor: (opacity = 1) => `rgba(153, 153, 153, ${opacity})`,
  propsForDots: {
    r: '6',
    stroke: Colors.white,
    strokeWidth: '3',
  },
  style: {
    borderRadius: 16,
  },
};

export const monthlyData = {
  datasets: [
    {
      data: monthly.map(() => chance.integer({ max: 30, min: 25 })),
    },
  ],
  labels: monthly,
};

export const dailyData = {
  datasets: [
    {
      data: daily.map(() => chance.integer({ max: 10, min: 1 })),
    },
  ],
  labels: daily,
};
