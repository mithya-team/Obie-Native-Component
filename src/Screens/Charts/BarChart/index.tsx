import {View, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import BarChartComponent from '../../../Components/Charts/BarChart';
import {mockBarChartData} from '../../../commons/mockData';

const BarChart: FC = () => (
  <View style={styles.root}>
    <BarChartComponent data={mockBarChartData} />
  </View>
);

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
});

export default BarChart;
