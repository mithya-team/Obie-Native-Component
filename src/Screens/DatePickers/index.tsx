import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

export interface IDatePickersProps {}

const DatePickers: FC<IDatePickersProps> = () => {
  return (
    <View style={styles.root}>
      <Text>DatePickers</Text>
    </View>
  );
};

export default DatePickers;

const styles = StyleSheet.create({
  root: {},
});
