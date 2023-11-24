/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import Charts from './src/Screens/Charts';
import DatePickers from './src/Screens/DatePickers';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Charts" component={Charts} />
        <Stack.Screen name="DatePickers" component={DatePickers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
