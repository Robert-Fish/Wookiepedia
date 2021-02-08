import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import SpeciesList from './SpeciesList';
import {getSpecies} from '../../actions/speciesActions';
import SpeciesDetail from './SpeciesDetail';

const Stack = createStackNavigator();

export default function SpeciesEntry() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator>
        <Stack.Screen
          name="SpeciesList"
          component={SpeciesList}
          options={{
            headerShown: false,
            cardStyle: {
              backgroundColor: '#fff',
            },
          }}
        />
        <Stack.Screen
          name="SpeciesDetail"
          component={SpeciesDetail}
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
