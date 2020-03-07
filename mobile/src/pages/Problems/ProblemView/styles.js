import styled from 'styled-components/native';

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

export const InfoContainerBottom = styled.View`
  background: #fff;
  border: 1px solid #0000001a;
  border-radius: 4px;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
`;

export const AlignContainer = styled.View`
  width: 95%;
  margin-bottom: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProblemText = styled.Text`
  color: #999999;
  font-size: 16px;
`;

export const ProblemTextSmall = styled.Text`
  color: #c1c1c1;
  font-size: 12px;
`;
