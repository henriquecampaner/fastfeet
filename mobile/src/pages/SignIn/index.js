import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { Form } from '@unform/mobile';

import logo from '~/assets/logo.png';
import Input from '~/components/Input';
import { signInRequest } from '~/store/modules/auth/actions';

import {
  Container,
  FormContainer,
  SignInButton,
  ButtonText,
  Logo,
} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  function handleSubmit(data, { reset }) {
    dispatch(signInRequest(data));
    reset();
  }
  return (
    <Container>
      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Logo source={logo} />
          <Input
            name="sign"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="number-pad"
            placeholder="Enter your registration id"
          />
          <SignInButton onPress={() => formRef.current.submitForm()}>
            <ButtonText>Sign In</ButtonText>
          </SignInButton>
        </Form>
      </FormContainer>
    </Container>
  );
}
