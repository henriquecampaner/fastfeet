import { darken } from 'polished';
import styled from 'styled-components';

import { colors } from '~/components/colors';

export const Button = styled.button`
  color: #fff;
  align-items: center;
  padding: 9px;
  background: ${colors.primary};
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
    background: ${darken(0.1, colors.primary)};
  }

  &:disabled {
    cursor: not-allowed;
    background: #666;
  }
`;
