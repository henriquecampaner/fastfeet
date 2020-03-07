import { Link } from 'react-router-dom';

import { darken } from 'polished';
import styled from 'styled-components';

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 2.4rem;
    font-weight: bold;
    margin: 20px 0;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 20rem;
  div {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    color: #999;
    svg {
      position: absolute;
      margin-left: 4px;
    }
    input {
      font-size: 16px;
      padding-left: 32px;
      width: 100%;
      height: 45px;
      border: 1px solid #dddddd;
      border-radius: 4px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.3);
      }
    }
  }
`;

export const ButtonContainer = styled(Link)`
  display: flex;
  align-items: center;
  padding: 9px;
  background: #7d40e7;

  border-radius: 4px;
  border: none;

  span {
    font-size: 1.4rem;
    font-weight: bold;
    color: #fff;
  }

  &:hover {
    background: ${darken(0.1, '#7D40E7')};
  }

  svg {
    margin-right: 10px;
  }
`;
