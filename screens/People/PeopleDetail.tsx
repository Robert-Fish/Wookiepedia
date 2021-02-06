import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Container from '../../ui/Layout/Container';
import BackButton from '../../ui/Touchable/BackButton';

export default function PeopleDetail(props) {
  const {name} = props.route.params;

  return (
    <SafeAreaView>
      <Container>
        <View
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
          }}>
          <BackButton
            title="Back"
            color="black"
            onPress={() => props.navigation.pop()}
          />
        </View>
        <Text>Hello {name}</Text>
      </Container>
    </SafeAreaView>
  );
}
