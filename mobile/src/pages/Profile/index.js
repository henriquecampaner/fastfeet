import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';

import { format, parseISO } from 'date-fns';

import api from '~/services/api';
import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  SmallText,
  BoldText,
  Avatar,
  TextContainer,
  TextButton,
  LogOut,
} from './styles';

export default function Main() {
  const { id } = useSelector(state => state?.auth);
  const { avatar } = useSelector(state => state?.user.profile);
  const dispatch = useDispatch();
  const [deliveryman, setDeliveryman] = useState({});

  useEffect(() => {
    async function getDeliveryman() {
      const { data } = await api.get(`/deliveryman/${id}`);
      setDeliveryman(data);
    }
    getDeliveryman();
  }, [id]);

  function handleLogout() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Avatar
        source={{
          uri: avatar ? avatar.url : <Icon name="perm_identity" />,
        }}
      />

      <TextContainer>
        <SmallText>Full Name</SmallText>
        <BoldText>{deliveryman.name}</BoldText>
      </TextContainer>

      <TextContainer>
        <SmallText>E-mail</SmallText>
        <BoldText>{deliveryman.email}</BoldText>
      </TextContainer>

      <TextContainer>
        <SmallText>Full Name</SmallText>
        <BoldText>
          {/* {parseISO(format(new Date(deliveryman.created_at), 'dd/MM/yyyy'))} */}
        </BoldText>
      </TextContainer>

      <LogOut onPress={() => handleLogout()}>
        <TextButton>Log Out</TextButton>
      </LogOut>
    </Container>
  );
}
