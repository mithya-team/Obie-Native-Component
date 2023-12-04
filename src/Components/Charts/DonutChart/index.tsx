import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import {Svg, G, Circle} from 'react-native-svg';

interface IDonutChartProps {
  percentage: number;
  radius?: number;
  strokeWidth?: number;
}

const DonutChart: FC<IDonutChartProps> = ({
  percentage,
  radius = 90,
  strokeWidth = 25,
}) => {
  const dotRadius = strokeWidth / 2 - 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const angleInDegrees = (percentage / 100) * 360;

  // Calculate positions for start and end dots
  const startX = dotRadius,
    startY = -radius,
    endX = radius * Math.sin((angleInDegrees - 8) * (Math.PI / 180)),
    endY = -radius * Math.cos((angleInDegrees - 8) * (Math.PI / 180));

  return (
    <View style={styles.root}>
      <Svg
        height={(radius + strokeWidth / 2) * 2}
        width={(radius + strokeWidth / 2) * 2}>
        <G
          transform={`translate(${radius + strokeWidth / 2},${
            radius + strokeWidth / 2
          })`}>
          {/* Progress Circle */}
          <Circle
            r={radius}
            fill="transparent"
            stroke="#e4f2f3"
            strokeWidth={strokeWidth}
          />
          {/* Donut Slice */}
          <Circle
            r={radius}
            fill="transparent"
            stroke="#14214e"
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset + 23}
            transform="rotate(7)"
            rotation={-90}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* Start Dot */}
          <Circle cx={startX} cy={startY} r={dotRadius} fill="#FFA500" />
          {/* End Dot */}
          <Circle cx={endX} cy={endY} r={dotRadius} fill="#ffffff" />
        </G>
      </Svg>
    </View>
  );
};

export default DonutChart;

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
