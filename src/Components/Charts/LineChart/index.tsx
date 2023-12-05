import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {
  LineChart as RNGCLineChart,
  yAxisSides,
} from 'react-native-gifted-charts';
import {
  LineChartPropsType,
  itemType,
} from 'react-native-gifted-charts/src/LineChart/types';

export interface ILineChartData {
  day: string;
  date: number;
  temperature: number;
}

export interface ILineChart extends Omit<LineChartPropsType, 'data'> {
  data: Array<Omit<itemType, 'value'> & ILineChartData & {value?: number}>;
}

const LineChart: FC<ILineChart> = ({
  yAxisSide = yAxisSides.RIGHT,
  ...chartProps
}) => {
  const data: LineChartPropsType['data'] = (chartProps?.data ?? [])?.map(
    ({date, day, temperature, ...lineChartData}) => ({
      ...lineChartData,
      value: temperature,
      dataPointText: `${temperature}`,
      focusedDataPointLabelComponent: () => CustomDataPointLabel(temperature),
      focusedCustomDataPoint: () => FocusedCustomDataPoint(),
      labelComponent: () => CustomXAxisLabel(day, date),
    }),
  );
  return (
    <RNGCLineChart
      {...chartProps}
      color="#14214e"
      customDataPoint={CustomDataPoint}
      data={data}
      dashGap={0}
      maxValue={4}
      noOfSections={8}
      roundToDigits={2}
      rulesColor="#e4f2f3"
      showFractionalValues
      spacing={45}
      stepHeight={50}
      stepValue={0.5}
      focusEnabled
      //   showStripOnFocus
      showTextOnFocus
      //   stripHeight={height}
      stripWidth={65}
      // stripColor="#eaf9f2"
      stripOpacity={0.5}
      xAxisColor="#e4f2f3"
      yAxisLabelWidth={45}
      width={300}
      yAxisOffset={96}
      yAxisSide={yAxisSide}
      yAxisThickness={0}
      xAxisLabelsVerticalShift={50}
      xAxisLabelsHeight={40}
    />
  );
};

const CustomDataPoint = () => <View style={styles.customDataPoint} />;

const FocusedCustomDataPoint = () => (
  <View style={styles.focusedCustomDataPoint} />
);

const CustomDataPointLabel = (dataPoint: number) => (
  <View style={styles.customDataPointLabel}>
    <Text style={styles.dataPoint}>{dataPoint}</Text>
  </View>
);

const CustomXAxisLabel = (day: string, date: number) => (
  <View style={styles.customXAxisLabel}>
    <Text style={styles.day}>{day}</Text>
    <Text style={styles.date}>{date}</Text>
  </View>
);

export default LineChart;

const styles = StyleSheet.create({
  customDataPoint: {
    backgroundColor: 'white',
    borderColor: '#14214e',
    borderRadius: 9999,
    borderWidth: 3,
    height: 15,
    width: 15,
  },
  focusedCustomDataPoint: {
    backgroundColor: '#14214e',
    borderRadius: 9999,
    height: 20,
    width: 20,
  },
  customDataPointLabel: {
    marginTop: 35,
    marginLeft: 10,
  },
  dataPoint: {
    fontSize: 13,
    color: '#14214e',
  },
  customXAxisLabel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  day: {
    color: '#14214e',
    fontWeight: 'bold',
  },
  date: {
    color: '#14214e',
  },
});
