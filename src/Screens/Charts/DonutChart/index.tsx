import {View, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import DonutChart from '../../../Components/Charts/DonutChart';

const PieChart: FC = () => {
  return (
    <View style={styles.root}>
      <DonutChart percentage={35} />
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
