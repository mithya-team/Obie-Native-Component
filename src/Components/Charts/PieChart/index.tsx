import {StyleSheet, View, Text} from 'react-native';
import React, {FC} from 'react';
import {PieChart as RNGCPieChart} from 'react-native-gifted-charts';

export interface IPieChartProps {}

const PieChart: FC<IPieChartProps> = () => {
  const pieData = [
    {value: 35, color: '#14214e'},
    {value: 65, color: '#e4f2f3'},
  ];
  return (
    <View style={styles.root}>
      <RNGCPieChart
        donut
        radius={110}
        innerRadius={85}
        data={pieData}
        centerLabelComponent={PieChartCenterLabel}
      />
      <Text style={styles.eta}>
        <Text style={{fontWeight: '500'}}>30 weeks, 2 days </Text>
        to go
      </Text>
    </View>
  );
};

const PieChartCenterLabel: FC = () => {
  return (
    <Text style={styles.centerLabel}>
      <Text style={{fontWeight: '500'}}>12 weeks,</Text> 2 days
    </Text>
  );
};

export default PieChart;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerLabel: {
    fontSize: 28,
    padding: 15,
    textAlign: 'center',
    color: '#14214e',
  },
  eta: {
    marginTop: 20,
    fontSize: 24,
    textAlign: 'center',
    color: '#14214e',
  },
});
