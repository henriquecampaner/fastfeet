/* eslint-disable no-nested-ternary */
import React from 'react';
import { View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import Background from '~/components/Background';
import { colors } from '~/components/colors';
import { Container, WrappContainer, InfoContainer } from '~/components/styles';
import api from '~/services/api';
import formatDate from '~/utils/FormatDate';

import {
  InfoText,
  AlignContainer,
  InfoTextMed,
  InfoTextSmall,
  Bottons,
  ButtonText,
  DateContainer,
  ButtonsContainer,
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
      Alert.alert('Withdrawal available between 08:00 and 18:00');
    }
  }

  return (
    <Background>
      <Container>
        <WrappContainer>
          <InfoContainer style={{ marginBottom: 5 }}>
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
          </InfoContainer>

          <InfoContainer style={{ marginBottom: 5 }}>
            <AlignContainer style={{ flexDirection: 'row' }}>
              <Icon name="event-note" color={colors.primary} size={20} />
              <InfoText>Delivery status</InfoText>
            </AlignContainer>

            <AlignContainer>
              <InfoTextMed>Status</InfoTextMed>
              <InfoTextSmall>
                {data.end_date
                  ? 'Delivered'
                  : data?.start_date
                  ? 'In Progress'
                  : 'Pending'}
              </InfoTextSmall>
            </AlignContainer>

            <DateContainer>
              <View>
                <InfoTextMed>Collection date</InfoTextMed>
                <InfoTextSmall>
                  {data?.start_date
                    ? formatDate(data?.start_date)
                    : 'Wait Collection'}
                </InfoTextSmall>
              </View>
              <View>
                <InfoTextMed>Delivery Date</InfoTextMed>
                <InfoTextSmall>
                  {data?.end_date ? formatDate(data.end_date) : '--/--/--'}
                </InfoTextSmall>
              </View>
            </DateContainer>
          </InfoContainer>

          <ButtonsContainer>
            {data.start_date ? (
              undefined
            ) : (
              <Bottons onPress={handleCollect}>
                <Icon name="assignment-turned-in" size={25} color="#0F4C81" />
                <ButtonText> Collect {'\n'} Delivery</ButtonText>
              </Bottons>
            )}

            <Bottons
              onPress={() =>
                navigation.navigate('AddProblem', { infos: data.id })
              }
            >
              <Icon name="highlight-off" size={25} color="#E74040" />
              <ButtonText>Report {'\n'} Problem</ButtonText>
            </Bottons>

            <Bottons
              onPress={() =>
                navigation.navigate('ViewProblem', { infos: data })
              }
            >
              <Icon name="info-outline" size={25} color="#E7BA40" />
              <ButtonText>View {'\n'} Problem</ButtonText>
            </Bottons>

            {!data.end_date ? (
              <Bottons
                onPress={() =>
                  navigation.navigate('ConfirmDelivery', { infos: data })
                }
              >
                <Icon name="check-circle" size={25} color={colors.primary} />
                <ButtonText>Confirm {'\n'} Delivery</ButtonText>
              </Bottons>
            ) : (
              undefined
            )}
          </ButtonsContainer>
        </WrappContainer>
      </Container>
    </Background>
  );
}

Details.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      infos: PropTypes.shape({
        id: PropTypes.number,
        deliveryman_id: PropTypes.number,
        recipient_id: PropTypes.number,
        product: PropTypes.string,
        start_date: PropTypes.string,
        end_date: PropTypes.string,
        recipient: PropTypes.shape({
          name: PropTypes.string,
          street: PropTypes.string,
          number: PropTypes.string,
          country: PropTypes.string,
          city: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};
