import { darken } from 'polished';
import styled from 'styled-components';

export const Button = styled.button`
  color: #fff;
  align-items: center;
  padding: 9px;
  background: #7d40e7;
  border-radius: 4px;
  border: none;

  &:first-child {
    margin-right: 15px;
  }

  span {
    font-size: 1.4rem;
    font-weight: bold;
    color: #fff;
  }

  &:hover {
    background: ${darken(0.1, '#7D40E7')};
  }

  &:disabled {
    cursor: not-allowed;
    background: #666;
  }
`;
