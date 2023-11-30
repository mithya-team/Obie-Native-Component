import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {FC} from 'react';
import Button from '../../Components/Button';
import {NativeStackNavigationHelpers} from '@react-navigation/native-stack/lib/typescript/src/types';

export interface IHomeProps {
  navigation: NativeStackNavigationHelpers;
}

const Home: FC<IHomeProps> = ({navigation}) => {
  const {height} = useWindowDimensions();
  return (
    <SafeAreaView style={{...styles.root, height: height * 0.9}}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.home}>
          {buttonData.map(({text, route}, index) => (
            <Button key={index} onPress={() => navigation.navigate(route)}>
              <Text style={styles.btnText}>{text}</Text>
            </Button>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const buttonData = [
  {route: 'LineChart', text: 'Line Chart'},
  {route: 'BarChart', text: 'Bar Chart'},
  {route: 'CalendarScreen', text: 'Calendar Screen'},
  {route: 'AgendaScreen', text: 'Agenda Screen'},
  {route: 'CalendarListScreen', text: 'Calendar List Screen'},
  {route: 'ExpandableCalendarScreen', text: 'Expandable Calendar Screen'},
  {route: 'NewCalendarListScreen', text: 'New Calendar List Screen'},
  {route: 'PlaygroundScreen', text: 'Playground Screen'},
  {route: 'TimelineCalendarScreen', text: 'Timeline Calendar Screen'},
  {route: 'NewCalendarScreen', text: 'New Calendar Screen'},
];

export default Home;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
  },
  home: {
    padding: 30,
    width: '100%',
    gap: 10,
  },
  btnText: {
    fontSize: 18,
  },
});
