import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React, {FC} from 'react';
import {LineChart, yAxisSides} from 'react-native-gifted-charts';

export interface IChartsProps {}

const Charts: FC = () => {
  const {height, width} = useWindowDimensions();
  const data = [
    {label: 'S', value: 97.1},
    {label: 'M', value: 97.3},
    {label: 'T', value: 97.4},
    {label: 'W', value: 97.5},
    {label: 'T', value: 97.6},
    {label: 'F', value: 97.7},
    {label: 'S', value: 97.5},
  ];

  return (
    <View style={styles.root}>
      <Text>
        <LineChart
          color="#14214e"
          customDataPoint={CustomDataPoint}
          dashGap={0}
          data={data}
          maxValue={4}
          noOfSections={8}
          roundToDigits={2}
          rulesColor="#e9f5f6"
          showFractionalValues
          spacing={45}
          stepHeight={70}
          stepValue={0.5}
          focusEnabled
          showStripOnFocus
          showTextOnFocus
          stripHeight={height}
          stripWidth={65}
          stripColor="#eaf9f2"
          stripOpacity={0.5}
          width={width - 90}
          xAxisColor="#e9f5f6"
          yAxisLabelWidth={45}
          yAxisOffset={96}
          yAxisSide={yAxisSides.RIGHT}
          yAxisThickness={0}
        />
      </Text>
    </View>
  );
};

const CustomDataPoint = () => <View style={styles.customDataPoint} />;

export default Charts;

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  customDataPoint: {
    backgroundColor: 'white',
    borderColor: '#14214e',
    borderRadius: 9999,
    borderWidth: 3,
    height: 12,
    width: 12,
  },
});
