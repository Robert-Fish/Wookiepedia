import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BackButton = ({navigation}) => (
  <TouchableOpacity onPress={() => navigation.pop()}>
    <Icon name="chevron-left" size={25} />
  </TouchableOpacity>
);

export default BackButton;
