import {View, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import PieChartComponent from '../../../Components/Charts/PieChart';

const PieChart: FC = () => {
  return (
    <View style={styles.root}>
      <PieChartComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 15,
    backgroundColor: 'white',
  },
});

export default PieChart;
