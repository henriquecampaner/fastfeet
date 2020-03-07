import styled from 'styled-components/native';

import { colors } from '~/components/colors';

export const Button = styled.TouchableOpacity`
  width: 100%;
  background: ${colors.primary};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: 45px;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
