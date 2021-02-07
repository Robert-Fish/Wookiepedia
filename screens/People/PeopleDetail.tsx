import React from 'react';
import {SafeAreaView, Linking} from 'react-native';
import Container from '../../ui/Layout/Container';
import BackButton from '../../ui/Touchable/BackButton';
import Heading from '../../ui/Typography/Heading';
import {ScrollableView} from '../../ui/Layout/ScrollableView';
import ViewEntry from '../../ui/Touchable/ViewEntry';
import {theme} from '../../App';

export default function PeopleDetail(props) {
  const {
    name,
    height,
    hair_color,
    eye_color,
    birth_year,
    mass,
    url,
  } = props.route.params;

  return (
    <SafeAreaView>
      <Container>
        <BackButton navigation={props.navigation} />
        <ScrollableView>
          <Heading isBold size="h1">
            {name}
          </Heading>
          <Heading size="h2">Height: {height}cm</Heading>
          <Heading isCapitalized size="h2">
            Hair Colour: {hair_color}
          </Heading>
          <Heading size="h2" isCapitalized>
            Eye Colour: {eye_color}
          </Heading>
          <Heading size="h2">Birth Year: {birth_year}</Heading>
          <Heading size="h2">Mass: {mass}kg</Heading>
          <ViewEntry
            title="View Entry"
            color={theme.main}
            onPress={() => Linking.openURL(url)}
          />
        </ScrollableView>
      </Container>
    </SafeAreaView>
  );
}
