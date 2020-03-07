import React, { useMemo, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';

import Background from '~/components/Background';
import api from '~/services/api';

import {
  Container,
  HeaderContainer,
  Title,
  WrappContainer,
  InfoContainerBottom,
  ProblemText,
  AlignContainer,
  ProblemTextSmall,
} from './styles';

export default function ProblemView({ route }) {
  const navigation = useNavigation();
  const [problems, setProblems] = useState([]);
  const { id } = route.params.infos;

  useMemo(() => {
    async function getProblem() {
      const { data } = await api.get(`/orders/${id}/problems`);
      // const { data } = await api.get(`/orders/22/problems`);
      setProblems(data);
    }
    getProblem();
  }, [id]);

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
          <Title>Delivery {id}</Title>

          {problems.length > 0 ? (
            problems.map(problem => (
              <InfoContainerBottom key={problem.id}>
                <AlignContainer>
                  <ProblemText>{problem.description}</ProblemText>
                  <ProblemTextSmall>
                    {format(parseISO(problem.createdAt), 'dd/MM/yyyy')}
                  </ProblemTextSmall>
                </AlignContainer>
              </InfoContainerBottom>
            ))
          ) : (
            <InfoContainerBottom>
              <AlignContainer style={{ justifyContent: 'center' }}>
                <Text>Delivery does not have problems</Text>
              </AlignContainer>
            </InfoContainerBottom>
          )}
        </WrappContainer>
      </Container>
    </Background>
  );
}
