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
        <Button onPress={() => navigation.navigate('DatePickers')}>
          <Text style={styles.btnText}>Calendars/Date-Pickers</Text>
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
    padding: 24,
    width: '100%',
    gap: 80,
  },
  btnText: {
    fontSize: 18,
  },
});
