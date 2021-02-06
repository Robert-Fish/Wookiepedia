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
import {ThemeProvider} from 'styled-components';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import People from './screens/People';

const theme = {
  main: '#2E2B3C',
};

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="People"
          drawerStyle={{backgroundColor: theme.main}}>
          <Drawer.Screen name="People" component={People} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
