import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  width: 100%;
  border-radius: 4px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  height: 45px;
  margin-left: 20px;
`;
