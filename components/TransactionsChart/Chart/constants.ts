import Chance from 'chance';

import * as Colors from '../../../constants/colors';

const chance = new Chance();
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export const chartConfig = {
  backgroundGradientFrom: Colors.white,
  backgroundGradientTo: Colors.white,
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(105, 121, 248, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(153, 153, 153, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: "6",
    strokeWidth: "3",
    stroke: Colors.white,
  },
};

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => chance.integer({ min: 25, max: 30 })),
    },
  ],
};
