import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
  margin: auto 0 !important;

  background: none;
  border: 0;
  position: relative;
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 150px;
  left: calc(50% - 85px);
  top: calc(100% + 1px);
  background: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px 0 4px 4px;
  padding: 15px 5px;
  margin-bottom: 0 !important;

  z-index: 10;

  display: ${props => (props.visible ? 'block' : 'none')};
`;
export const Notification = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
  button {
    display: flex;
    /* border-bottom: 1px solid #eeeeee; */
    border: none;
    padding-bottom: 10px;
    margin-bottom: 10px;
    background: none;

    &:last-child {
      border: none;
      padding-bottom: 0;
      margin-bottom: 0;
    }

    span {
      font-size: 1.6rem;
      color: #999999;

      &:hover {
        font-weight: bold;
        cursor: pointer;
      }
    }

    svg {
      margin-right: 10px;
    }
  }

  @media (max-width: 1000px) {
    left: calc(50% - 115px);
  }
`;

export const EditButton = styled(Link)`
  display: flex;
  border: none;
  padding-bottom: 10px;
  margin-bottom: 10px;
  background: none;

  &:last-child {
    border: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  span {
    font-size: 1.6rem;
    color: #999999;

    &:hover {
      font-weight: bold;
      cursor: pointer;
    }
  }

  svg {
    margin-right: 10px;
  }
`;
