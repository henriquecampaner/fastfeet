import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';

export default function CustomHeader() {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <Icon name="keyboard-arrow-left" color="#fff" size={30} />
      </TouchableOpacity>
    </>
  );
}
