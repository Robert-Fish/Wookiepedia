import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PeopleList from './PeopleList';
import PeopleDetail from './PeopleDetail';
import {useDispatch} from 'react-redux';
import {getPeople} from '../../actions/peopleActions';

const Stack = createStackNavigator();

export default function PeopleEntry() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

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
