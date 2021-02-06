import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native';
import Heading from '../../ui/Typography/Heading';
import Container from '../../ui/Layout/Container';
import {ListItem, ListItemText} from '../../ui/Layout/ListItem';

export default function People() {
  const {people} = useSelector((state) => state.people);

  return (
    <SafeAreaView>
      <Container>
        <Heading>People</Heading>
        <FlatList
          data={people}
          renderItem={(item) => (
            <ListItem>
              <ListItemText>{item.item.name}</ListItemText>
            </ListItem>
          )}
          keyExtractor={(item) => item.name}
        />
      </Container>
    </SafeAreaView>
  );
}
