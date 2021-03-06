import React, {useEffect} from 'react';
import {FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native';
import Heading from '../../ui/Typography/Heading';
import Container from '../../ui/Layout/Container';
import {ListItem, ListItemText} from '../../ui/Layout/ListItem';
import peopleReducer from '../../reducers/peopleReducer';
import {getPeople} from '../../actions/peopleActions';

export default function PeopleList({navigation}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch]);

  const {people, loading} = useSelector((state: RootState) => state.people);

  return (
    <SafeAreaView>
      <Container>
        <Heading isBold>People</Heading>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
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
        )}
      </Container>
    </SafeAreaView>
  );
}

export type RootState = ReturnType<typeof peopleReducer>;
