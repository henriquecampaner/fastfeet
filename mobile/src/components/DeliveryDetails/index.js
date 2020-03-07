import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';

import Background from '~/components/Background';
import { colors } from '~/components/colors';
import api from '~/services/api';

import {
  Container,
  HeaderContainer,
  Title,
  WrappContainer,
  InfoText,
  AlignContainer,
  InfoTextMed,
  InfoTextSmall,
  InfoContainerBottom,
  Bottons,
  ButtonText,
  DateContainer,
} from './styles';

export default function Details({ route }) {
  const { id } = useSelector(state => state.auth);
  const data = route.params.infos;
  const navigation = useNavigation();

  async function handleCollect() {
    try {
      await api.put(`/deliveryman/${id}/deliveries`, {
        start_date: new Date(),
        order_id: data.id,
      });
      Alert.alert('Delivery collected');
      navigation.navigate('Dashboard');
    } catch (error) {
      Alert.alert(error);
    }
  }

  return (
    <Background>
      <Container>
        <HeaderContainer>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Icon name="keyboard-arrow-left" color="#fff" size={30} />
          </TouchableOpacity>
          <View>
            <Title>Delivery Details </Title>
          </View>
          <View />
        </HeaderContainer>

        <WrappContainer>
          <InfoContainerBottom style={{ marginBottom: 5 }}>
            <AlignContainer style={{ flexDirection: 'row' }}>
              <Icon name="local-shipping" color={colors.primary} size={20} />
              <InfoText>Informacoes da entrega</InfoText>
            </AlignContainer>

            <AlignContainer>
              <InfoTextMed>Recipient</InfoTextMed>
              <InfoTextSmall>{data?.recipient?.name}</InfoTextSmall>
            </AlignContainer>

            <AlignContainer>
              <InfoTextMed>Address to Delivery</InfoTextMed>
              <InfoTextSmall>
                {`${data?.recipient?.number}, ${data?.recipient?.street} - ${data?.recipient?.city} / ${data?.recipient?.country}`}
              </InfoTextSmall>
            </AlignContainer>

            <AlignContainer>
              <InfoTextMed>Product</InfoTextMed>
              <InfoTextSmall>{data?.product}</InfoTextSmall>
            </AlignContainer>
          </InfoContainerBottom>

          <InfoContainerBottom style={{ marginBottom: 5 }}>
            <AlignContainer style={{ flexDirection: 'row' }}>
              <Icon name="event-note" color={colors.primary} size={20} />
              <InfoText>Delivery status</InfoText>
            </AlignContainer>

            <AlignContainer>
              <InfoTextMed>Status</InfoTextMed>
              <InfoTextSmall>
                {data?.start_date ? 'In Progress' : 'Pending'}
              </InfoTextSmall>
            </AlignContainer>

            <DateContainer>
              <View>
                <InfoTextMed>Collection date</InfoTextMed>
                <InfoTextSmall>
                  {data?.start_date
                    ? format(parseISO(data?.start_date), 'dd/MM/yyyy')
                    : 'Wait Collection'}
                </InfoTextSmall>
              </View>
              <View>
                <InfoTextMed>Delivery Date</InfoTextMed>
                <InfoTextSmall>
                  {data?.end_date
                    ? format(parseISO(data?.end_date), 'dd/MM/yyyy')
                    : '--/--/--'}
                </InfoTextSmall>
              </View>
            </DateContainer>
          </InfoContainerBottom>

          <InfoContainerBottom
            style={{
              paddingEnd: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              paddingTop: 0,
              flexDirection: 'row',
            }}
          >
            {data.start_date ? (
              <Bottons>
                <ButtonText>Delivery Collected</ButtonText>
              </Bottons>
            ) : (
              <Bottons onPress={handleCollect}>
                <Icon name="assignment-turned-in" size={25} color="#0F4C81" />
                <ButtonText> Collect Delivery</ButtonText>
              </Bottons>
            )}

            <Bottons
              onPress={() =>
                navigation.navigate('AddProblem', { infos: data.id })
              }
            >
              <Icon name="highlight-off" size={25} color="#E74040" />
              <ButtonText>Report problem</ButtonText>
            </Bottons>

            <Bottons
              onPress={() =>
                navigation.navigate('ViewProblem', { infos: data })
              }
            >
              <Icon name="info-outline" size={25} color="#E7BA40" />
              <ButtonText>View Problem</ButtonText>
            </Bottons>

            <Bottons
              onPress={() =>
                navigation.navigate('ConfirmDelivery', { infos: data })
              }
            >
              <Icon name="check-circle" size={25} color={colors.primary} />
              <ButtonText>Confirm delivery</ButtonText>
            </Bottons>
          </InfoContainerBottom>
        </WrappContainer>
      </Container>
    </Background>
  );
}
