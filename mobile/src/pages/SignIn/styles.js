import styled from 'styled-components/native';

import { colors } from '~/components/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 90%;
`;

export const Logo = styled.Image`
  margin-bottom: 30px;
`;

export const SignInButton = styled.TouchableOpacity`
  width: 100%;
  background: #82bf18;
  height: 45px;
  border-radius: 4px;
  margin-top: 15px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
