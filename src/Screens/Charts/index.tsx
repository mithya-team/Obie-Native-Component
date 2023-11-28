import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import BBTChart from '../../Components/Charts/BBTChart';
import useMockData from '../../Hooks/useMockData';

export interface IChartsProps {}

const Charts: FC = () => {
  const data = useMockData('BBTChart');

  return (
    <View style={styles.root}>
      <BBTChart data={data} />
    </View>
  );
};

export default Charts;

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
});
