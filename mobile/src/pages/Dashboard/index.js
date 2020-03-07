import React, { useState, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';

import { useFocusEffect } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';

import Delivery from '~/components/Delivery';
import api from '~/services/api';
import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  HeaderContainer,
  Avatar,
  WelcomeText,
  BoldText,
  TextContainer,
  ContentContainer,
  ContainerAlign,
  ButtonText,
  ChangeButton,
} from './styles';

function Dashboard() {
  const dispatch = useDispatch();
  const { id } = useSelector(state => state.auth);
  const { profile } = useSelector(state => state.user);

  const [orders, setOrders] = useState([]);
  const [type, setType] = useState('pending');

  async function getAvailableOrders() {
    if (type === 'pending') {
      const { data } = await api.get(`/deliveryman/${id}/deliveries`);
      setOrders(data);
    } else {
      const { data } = await api.get(`/deliveryman/${id}/deliveredorders`);
      setOrders(data);
    }
  }

  useFocusEffect(
    useCallback(() => {
      getAvailableOrders();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type])
  );

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <HeaderContainer>
        <View style={{ flexDirection: 'row' }}>
          <Avatar
            source={{
              uri: profile?.avatar
                ? profile.avatar.url
                : 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
            }}
          />
          <TextContainer>
            <WelcomeText>Welcome back,</WelcomeText>
            <BoldText>{profile?.name}</BoldText>
          </TextContainer>
        </View>
        <Icon
          name="exit-to-app"
          color="#E74040"
          size={25}
          onPress={handleLogout}
        />
      </HeaderContainer>

      <ContentContainer>
        <ContainerAlign>
          <BoldText>Deliveries</BoldText>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <ChangeButton
              onPress={() => setType('pending')}
              selected={type === 'pending'}
              style={{ marginRight: 5 }}
            >
              <ButtonText selected={type === 'pending'}>Pending</ButtonText>
            </ChangeButton>

            <ChangeButton
              onPress={() => setType('delivered')}
              selected={type === 'delivered'}
            >
              <ButtonText selected={type === 'delivered'}>Delivered</ButtonText>
            </ChangeButton>
          </View>
        </ContainerAlign>

        <FlatList
          ListEmptyComponent={() => (
            <ButtonText style={{ alignSelf: 'center' }}>
              You have do not deliveries
            </ButtonText>
          )}
          showsVerticalScrollIndicator={false}
          navigation
          data={orders}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Delivery data={item} />}
        />
      </ContentContainer>
    </Container>
  );
}

export default Dashboard;
