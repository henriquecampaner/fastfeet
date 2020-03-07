import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';

import Button from '~/components/Button';
import { colors } from '~/components/colors';

import {
  Container,
  DeliveryName,
  SmallText,
  ContainerAlign,
  MarkContainer,
  Marker,
  Line,
  StatusContainer,
  DetailsContainer,
  DetailText,
  TextContainer,
} from './styles';

export default function Delivery({ data }) {
  const navigation = useNavigation();
  return (
    <Container>
      <ContainerAlign>
        <Icon name="local-shipping" color={colors.primary} size={20} />
        <DeliveryName>Delivery {data.id}</DeliveryName>
      </ContainerAlign>

      <MarkContainer style={{ alignSelf: 'center' }}>
        <Marker marked />
        <Line />
        <Marker marked={!!data.start_date} />
        <Line />
        <Marker marked={!!data.end_date} />
      </MarkContainer>

      <StatusContainer>
        <View style={{ alignItems: 'center' }}>
          <SmallText>Waiting for</SmallText>
          <SmallText>collection</SmallText>
        </View>

        <SmallText>Collected</SmallText>
        <SmallText>Delivered</SmallText>
      </StatusContainer>

      <DetailsContainer>
        <TextContainer>
          <SmallText>Date</SmallText>
          <DetailText>
            {data.start_date
              ? format(parseISO(data.start_date), 'dd/MM/yyyy')
              : 'Ready for Collect'}
          </DetailText>
        </TextContainer>

        <TextContainer>
          <SmallText>City</SmallText>
          <DetailText>{data.recipient.city.substring(0, 10)}</DetailText>
        </TextContainer>

        <TextContainer>
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', { infos: data })}
          >
            <DetailText style={{ color: colors.primary, fontWeight: 'bold' }}>
              Details
            </DetailText>
          </TouchableOpacity>
        </TextContainer>
      </DetailsContainer>

      {data.start_date ? (
        <DetailText>oi</DetailText>
      ) : (
        <Button text="Collect Delivery" />
      )}
    </Container>
  );
}
