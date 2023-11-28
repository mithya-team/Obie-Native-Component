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
import CalendarScreen from './src/Screens/Example/src/screens/calendarScreen';
import AgendaScreen from './src/Screens/Example/src/screens/agendaScreen';
import CalendarListScreen from './src/Screens/Example/src/screens/calendarListScreen';
import ExpandableCalendarScreen from './src/Screens/Example/src/screens/expandableCalendarScreen';
import NewCalendarListScreen from './src/Screens/Example/src/screens/newCalendarListScreen';
import PlaygroundScreen from './src/Screens/Example/src/screens/playgroundScreen';
import TimelineCalendarScreen from './src/Screens/Example/src/screens/timelineCalendarScreen';
import NewCalendarScreen from './src/Screens/Example/src/screens/calendarPlaygroundScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Charts" component={Charts} />
        <Stack.Screen name="DatePickers" component={DatePickers} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
        <Stack.Screen name="AgendaScreen" component={AgendaScreen} />
        <Stack.Screen
          name="CalendarListScreen"
          component={CalendarListScreen}
        />
        <Stack.Screen
          name="ExpandableCalendarScreen"
          component={ExpandableCalendarScreen}
        />
        <Stack.Screen
          name="NewCalendarListScreen"
          component={NewCalendarListScreen}
        />
        <Stack.Screen name="PlaygroundScreen" component={PlaygroundScreen} />
        <Stack.Screen
          name="TimelineCalendarScreen"
          component={TimelineCalendarScreen}
        />
        <Stack.Screen name="NewCalendarScreen" component={NewCalendarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
