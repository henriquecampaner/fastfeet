import { Link } from 'react-router-dom';

import { darken } from 'polished';
import styled from 'styled-components';

import { colors } from '~/components/colors';

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 2.4rem;
    font-weight: bold;
    margin: 20px 0;
  }

  aside {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
`;

export const ButtonBack = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px;
  margin-right: 10px;
  background: #cccccc;

  border-radius: 4px;
  border: none;

  span {
    font-size: 1.4rem;
    font-weight: bold;
    color: #fff;
  }

  &:hover {
    background: ${darken(0.1, '#CCCCCC')};
  }

  svg {
    margin-right: 10px;
  }
`;

export const ButtonSave = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px;
  background: ${colors.primary};

  border-radius: 4px;
  border: none;

  span {
    font-size: 1.4rem;
    font-weight: bold;
    color: #fff;
  }

  &:hover {
    background: ${darken(0.1, colors.primary)};
  }

  svg {
    margin-right: 10px;
  }
`;
