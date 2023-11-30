import {View, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import LineChartComponent from '../../../Components/Charts/LineChart';
import {mockLineChartData} from '../../../commons/mockData';

const LineChart: FC = () => {
  return (
    <View style={styles.root}>
      <LineChartComponent data={mockLineChartData} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
});

export default LineChart;
