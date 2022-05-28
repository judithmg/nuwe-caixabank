import Chance from 'chance';

import * as Colors from '../../constants/colors';

const chance = new Chance();

export const options = {
  fill: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
  responsive: true,
  tension: 0.8,
};

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const dataArray = labels.map(() => chance.integer({ max: 40000, min: 0 }));

export const total = dataArray.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
);

export const data = {
  datasets: [
    {
      backgroundColor: Colors.purple,
      borderColor: Colors.purple20,
      data: dataArray,
      label: 'Expenses',
    },
  ],
  labels,
};
