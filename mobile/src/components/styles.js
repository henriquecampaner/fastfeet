import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  align-items: center;
`;

export const WrappContainer = styled.View`
  align-items: center;
  width: 90%;
  border-radius: 4px;
`;

export const InfoContainer = styled.View`
  background: #fff;
  border: 1px solid #0000001a;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
`;

export const AlignContainer = styled.View`
  width: 95%;
  margin-bottom: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
