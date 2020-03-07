import styled from 'styled-components/native';

import { colors } from '~/components/colors';

export const Container = styled.SafeAreaView`
  padding-top: 20px;
  flex: 1;
  align-items: center;
  background: #fff;
`;

export const HeaderContainer = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 68px;
`;

export const WelcomeText = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const BoldText = styled.Text`
  font-size: 22px;
  color: #444444;
  font-weight: bold;
`;

export const TextContainer = styled.View`
  margin-left: 15px;
`;

export const ContainerAlign = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ContentContainer = styled.View`
  width: 90%;
  flex: 1;
  margin-top: 10px;
`;

export const ChangeButton = styled.TouchableOpacity`
  padding: 3px;
  border-color: ${props => (props.selected ? colors.primary : 'transparent')};
  border-bottom-width: 1px;
  align-self: flex-end;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: ${props => (props.selected ? colors.primary : '#444')};
`;
