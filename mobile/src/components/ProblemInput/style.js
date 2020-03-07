import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  border: 1px solid #0000001a;
  border-radius: 4px;
  width: 100%;
  padding: 10px;
  margin: 10px 0;

  height: 300px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  align-self: flex-start;
`;
