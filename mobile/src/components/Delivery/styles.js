import styled from 'styled-components/native';

import { colors } from '~/components/colors';

export const Container = styled.View`
  border: 1px solid #0000001a;
  border-radius: 4px;
  margin-bottom: 30px;
`;

export const ContainerAlign = styled.View`
  flex-direction: row;
  padding: 10px;
`;

export const DeliveryName = styled.Text`
  color: ${colors.primary};
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
`;

export const SmallText = styled.Text`
  font-size: 10px;
  color: #999999;
`;

export const MarkContainer = styled.View`
  padding: 0 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Line = styled.View`
  height: 1px;
  flex: 1;
  background: ${colors.primary};
`;

export const Marker = styled.View`
  width: 9px;
  height: 9px;
  border-radius: 9px;
  background: ${colors.primary};
  border: 1px solid ${colors.primary};
  background: ${props => (props.marked ? colors.primary : '#fff')};
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 10px;
`;

export const DetailsContainer = styled.View`
  flex-direction: row;
  background: #f8f9fd;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const TextContainer = styled.View`
  align-items: center;
`;

export const DetailText = styled.Text`
  font-size: 13px;
`;
