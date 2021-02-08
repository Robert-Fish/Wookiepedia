import React from 'react';
import {SafeAreaView, Linking} from 'react-native';
import Container from '../../ui/Layout/Container';
import BackButton from '../../ui/Touchable/BackButton';
import Heading from '../../ui/Typography/Heading';
import {ScrollableView} from '../../ui/Layout/ScrollableView';
import ViewEntry from '../../ui/Touchable/ViewEntry';
import {theme} from '../../App';

export default function SpeciesDetail({route, navigation}) {
  const {
    name,
    average_height,
    average_lifespan,
    classification,
    designation,
    url,
  } = route.params;

  return (
    <SafeAreaView>
      <Container>
        <BackButton navigation={navigation} />
        <ScrollableView>
          <Heading isBold size="h1">
            {name}
          </Heading>
          <Heading size="h2">Average Height: {average_height}cm</Heading>
          <Heading size="h2">
            Average Lifespan: {average_lifespan} years
          </Heading>
          <Heading isCapitalized size="h2">
            Classification: {classification}
          </Heading>
          <Heading size="h2" isCapitalized>
            Designation: {designation}
          </Heading>
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
