import React, {useEffect} from 'react';
import {FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native';
import Heading from '../../ui/Typography/Heading';
import Container from '../../ui/Layout/Container';
import {ListItem, ListItemText} from '../../ui/Layout/ListItem';
import speciesReducer from '../../reducers/speciesReducer';
import {getSpecies} from '../../actions/speciesActions';

export default function SpeciesList({navigation}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecies());
  }, [dispatch]);

  const {species, loading} = useSelector((state: RootState) => state.species);

  return (
    <SafeAreaView>
      <Container>
        <Heading isBold>Species</Heading>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            data={species}
            renderItem={(item) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SpeciesDetail', {
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

export type RootState = ReturnType<typeof speciesReducer>;
