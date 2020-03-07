import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const TextContainer = styled.View`
  width: 90%;
  padding-left: 20px;
  align-self: flex-start;
  margin: 5px 0;
`;

export const SmallText = styled.Text`
  color: #666666;
  font-size: 12px;
`;
export const BoldText = styled.Text`
  font-size: 22px;
  color: #444444;
  font-weight: bold;
`;
export const Avatar = styled.Image`
  width: 136px;
  height: 136px;
  border-radius: 100px;
  margin-bottom: 30px;
`;

export const LogOut = styled.TouchableOpacity`
  margin-top: 50px;
  background: #e74040;
  width: 90%;
  height: 40px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
