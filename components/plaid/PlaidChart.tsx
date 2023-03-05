import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import IUser from '../types/IUser';
import PlaidDisplay from './PlaidDisplay';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  padding: 10,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: 'Accounts',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'ACH',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Crypto',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function PlaidChart({ user }: { user: IUser }) {
  return (
    <div>
      {user._id === undefined ? (
        <p className='text-m'>Loading...</p>
      ) : (
        <div>
          <Line options={options} data={data} />
          <PlaidDisplay user={user} />
        </div>
      )}
    </div>

  );
}
