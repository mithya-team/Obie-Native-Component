import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  useWindowDimensions,
} from 'react-native';
import React, {FC} from 'react';
import Button from '../../Components/Button';

export interface IHomeProps {
  // TODO - add navigation type
  navigation: any;
}

const Home: FC<IHomeProps> = ({navigation}) => {
  const {height} = useWindowDimensions();
  return (
    <SafeAreaView style={{...styles.root, height: 0.75 * height}}>
      <View style={styles.home}>
        <Button onPress={() => navigation.navigate('Charts')}>
          <Text style={styles.btnText}>Charts/Graphs</Text>
        </Button>
        <Button onPress={() => navigation.navigate('CalendarScreen')}>
          <Text style={styles.btnText}>Calendar Screen</Text>
        </Button>
        <Button onPress={() => navigation.navigate('AgendaScreen')}>
          <Text style={styles.btnText}>Agenda Screen</Text>
        </Button>
        <Button onPress={() => navigation.navigate('CalendarListScreen')}>
          <Text style={styles.btnText}>Calendar List Screen</Text>
        </Button>
        <Button onPress={() => navigation.navigate('ExpandableCalendarScreen')}>
          <Text style={styles.btnText}>Expandable Calendar Screen</Text>
        </Button>
        <Button onPress={() => navigation.navigate('NewCalendarListScreen')}>
          <Text style={styles.btnText}>New Calendar List Screen</Text>
        </Button>
        <Button onPress={() => navigation.navigate('PlaygroundScreen')}>
          <Text style={styles.btnText}>Playground Screen</Text>
        </Button>
        <Button onPress={() => navigation.navigate('TimelineCalendarScreen')}>
          <Text style={styles.btnText}>Timeline Calendar Screen</Text>
        </Button>
        <Button onPress={() => navigation.navigate('NewCalendarScreen')}>
          <Text style={styles.btnText}>New Calendar Screen</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  home: {
    top: 20,
    padding: 40,
    width: '100%',
    gap: 10,
  },
  btnText: {
    fontSize: 18,
  },
});
