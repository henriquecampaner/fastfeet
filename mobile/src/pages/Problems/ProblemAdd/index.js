import React, { useRef } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';

import Background from '~/components/Background';
import ProblemInput from '~/components/ProblemInput';
import api from '~/services/api';

import {
  Container,
  HeaderContainer,
  Title,
  WrappContainer,
  SubmitButton,
  TextButton,
} from './styles';

export default function ProblemAdd({ route }) {
  const navigation = useNavigation();
  const id = route.params.infos;
  const formRef = useRef(null);

  async function handleSubmit(data) {
    await api.post('/orders/problems', {
      description: data.description,
      order_id: id,
    });
    Alert.alert('Problem sent!');
    navigation.navigate('Dashboard');
  }
  return (
    <Background>
      <Container>
        <HeaderContainer>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Icon name="keyboard-arrow-left" color="#fff" size={30} />
          </TouchableOpacity>
          <View>
            <Title>View Problems</Title>
          </View>
          <View />
        </HeaderContainer>

        <WrappContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <ProblemInput
              name="description"
              placeholder="Include the delivery issue here"
            />

            <SubmitButton onPress={() => formRef.current.submitForm()}>
              <TextButton>Send</TextButton>
            </SubmitButton>
          </Form>
        </WrappContainer>
      </Container>
    </Background>
  );
}
