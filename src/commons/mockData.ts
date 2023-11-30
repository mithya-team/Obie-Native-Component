import {BarChartPropsType} from 'react-native-gifted-charts/src/BarChart/types';
import {ILineChart} from '../Components/Charts/LineChart';

export const mockLineChartData: ILineChart['data'] = [
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

export const mockBarChartData: BarChartPropsType['data'] = [
  {value: 50, label: 'S', frontColor: 'lightgreen'},
  {value: 100, label: 'M', frontColor: '#ffda5f'},
  {value: 140, label: 'T', frontColor: '#ffb959'},
  {value: 150, label: 'W', frontColor: 'orange'},
  {value: 250, label: 'T', frontColor: '#f74d4c'},
  {value: 300, label: 'F', frontColor: 'violet'},
  {value: 350, label: 'S', frontColor: '#b55757'},
];
