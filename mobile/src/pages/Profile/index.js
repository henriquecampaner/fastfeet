import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';

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
  const deliveryman = useSelector(state => state?.user.profile);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Avatar
        source={{
          uri: deliveryman.avatar ? (
            deliveryman.avatar.url
          ) : (
            <Icon name="perm_identity" />
          ),
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
        <SmallText>Registration Date</SmallText>
        <BoldText>{new Date(deliveryman.regiter).toDateString()}</BoldText>
      </TextContainer>

      <LogOut onPress={() => handleLogout()}>
        <TextButton>Log Out</TextButton>
      </LogOut>
    </Container>
  );
}
