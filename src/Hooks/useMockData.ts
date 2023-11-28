import {IBBTChart} from '../Components/Charts/BBTChart';

const useMockData = (dataFor: 'BBTChart') => {
  switch (dataFor) {
    case 'BBTChart':
      return mockBBTChartData;
    default:
      return [];
  }
};

const mockBBTChartData: IBBTChart['data'] = [
  {
    day: 'S',
    date: 12,
    temperature: 97.4,
  },
  {
    day: 'M',
    date: 13,
    temperature: 97.25,
  },
  {
    day: 'T',
    date: 14,
    temperature: 97.6,
  },
  {
    day: 'W',
    date: 15,
    temperature: 97.7,
  },
  {
    day: 'T',
    date: 16,
    temperature: 97.75,
  },
  {
    day: 'F',
    date: 17,
    temperature: 97.75,
  },
  {
    day: 'S',
    date: 18,
    temperature: 97.5,
  },
];

export default useMockData;
