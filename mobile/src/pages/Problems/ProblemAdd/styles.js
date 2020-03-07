import styled from 'styled-components/native';

import { colors } from '~/components/colors';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  align-items: center;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  margin: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const WrappContainer = styled.View`
  align-items: center;
  width: 90%;
  border-radius: 4px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  background: ${colors.primary};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: 45px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
