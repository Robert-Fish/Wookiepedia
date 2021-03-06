/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import PeopleEntry from './screens/People';
import SpeciesEntry from './screens/Species';

export const theme = {
  main: '#2E2B3C',
};

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="People">
          <Drawer.Screen name="People" component={PeopleEntry} />
          <Drawer.Screen name="Species" component={SpeciesEntry} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
