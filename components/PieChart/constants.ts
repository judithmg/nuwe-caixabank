import Chance from 'chance';

const chance = new Chance();

const labels = ['Screens', 'PCs', 'Phones', 'Tablets'];

export const data = {
  datasets: [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
      data: labels.map(() => chance.integer({ max: 10, min: 2 })),
      label: 'Devices',
    },
  ],
  labels,
};

export const options = {
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
  responsive: true,
};
