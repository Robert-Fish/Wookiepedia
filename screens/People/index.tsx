import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PeopleList from './PeopleList';
import PeopleDetail from './PeopleDetail';

const Stack = createStackNavigator();

export default function PeopleEntry() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator>
        <Stack.Screen
          name="PeopleList"
          component={PeopleList}
          options={{
            headerShown: false,
            cardStyle: {
              backgroundColor: '#fff',
            },
          }}
        />
        <Stack.Screen
          name="PeopleDetail"
          component={PeopleDetail}
          options={{
            headerShown: false,
            cardStyle: {
              backgroundColor: '#fff',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
