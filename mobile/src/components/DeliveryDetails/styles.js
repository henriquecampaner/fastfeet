import styled from 'styled-components/native';

import { colors } from '~/components/colors';

export const AlignContainer = styled.View`
  width: 95%;
  margin-bottom: 8px;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const InfoText = styled.Text`
  font-size: 16px;
  color: ${colors.primary};
  margin-left: 10px;
`;

export const InfoTextMed = styled.Text`
  font-size: 14px;
  color: #999999;
  text-transform: uppercase;
`;

export const InfoTextSmall = styled.Text`
  font-size: 14px;
  color: #666666;
`;

export const ButtonsContainer = styled.View`
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Bottons = styled.TouchableOpacity`
  border-radius: 4px;
  border: 1px solid #0000001a;
  height: 83px;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  background: #f8f9fd;
`;

export const ButtonText = styled.Text`
  font-size: 13px;
  color: #999999;
  text-align: center;
  margin-top: 5px;
`;
