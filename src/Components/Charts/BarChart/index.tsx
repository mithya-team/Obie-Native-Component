import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {BarChart as RNGCBarChart, yAxisSides} from 'react-native-gifted-charts';
import {BarChartPropsType} from 'react-native-gifted-charts/src/BarChart/types';

export interface IBarChart extends BarChartPropsType {}

const BarChart: FC<IBarChart> = barChartProps => (
  <View style={styles.barChartContainer}>
    {/* {renderTitle()} */}
    <RNGCBarChart
      {...barChartProps}
      barBorderRadius={16}
      barWidth={30}
      dashGap={0}
      maxValue={350}
      noOfSections={7}
      rulesColor={'#e4f2f3'}
      rulesThickness={1}
      spacing={15}
      stepHeight={40}
      xAxisColor={'#e4f2f3'}
      xAxisThickness={1}
      yAxisLabelWidth={25}
      yAxisSide={yAxisSides.RIGHT}
      yAxisThickness={0}
    />
  </View>
);

export default BarChart;

const styles = StyleSheet.create({
  barChartContainer: {
    paddingVertical: 20,
    backgroundColor: 'white',
  },
});
