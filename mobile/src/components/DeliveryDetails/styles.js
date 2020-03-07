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
  margin-bottom: 25px;
`;

export const Title = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const WrappContainer = styled.View`
  align-items: center;
  width: 90%;
  border-radius: 4px;
`;

export const InfoContainerBottom = styled.View`
  background: #fff;
  border: 1px solid #0000001a;
  width: 100%;
  padding: 10px;
`;

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

export const Bottons = styled.TouchableOpacity`
  border: 1px solid #0000001a;
  height: 83px;
  width: 26%;
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
