import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native';
import Heading from '../../ui/Typography/Heading';
import Container from '../../ui/Layout/Container';
import {ListItem, ListItemText} from '../../ui/Layout/ListItem';
import peopleReducer from '../../reducers/peopleReducer';

export default function PeopleList({navigation}) {
  const {people} = useSelector((state: RootState) => state.people);

  return (
    <SafeAreaView>
      <Container>
        <Heading>People</Heading>
        <FlatList
          data={people}
          renderItem={(item) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('PeopleDetail', {
                  ...item.item,
                })
              }>
              <ListItem>
                <ListItemText>{item.item.name}</ListItemText>
              </ListItem>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      </Container>
    </SafeAreaView>
  );
}

export type RootState = ReturnType<typeof peopleReducer>;
