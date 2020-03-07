import { RNCamera } from 'react-native-camera';

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

export const Camera = styled(RNCamera)`
  width: 100%;
  height: 450px;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
  background-color: black;

  align-items: center;
  justify-content: flex-end;
`;

export const CameraContent = styled.Image`
  flex: 1;

  width: 100%;
`;

export const ButtonCapture = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 60px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const SendButton = styled.TouchableOpacity`
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
