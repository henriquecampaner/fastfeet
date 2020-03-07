import { darken } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: #fff;
    width: 40rem;
    padding: 3.5rem 2rem;
    border-radius: 4px;

    img {
      width: 26rem;
      margin: 1rem;
    }

    div {
      display: flex;
      flex-direction: column;
      margin-top: 1.8rem;
      width: 100%;

      span {
        font-size: 1.4rem;
        font-weight: bold;
        margin-bottom: 8px;
      }

      input {
        height: 45px;
        border-radius: 4px;
        border: 1px solid #dddddd;
        background: #ffffff 0% 0% no-repeat padding-box;
        padding-left: 10px;

        &:focus {
          border: 1px dotted #7d40e7;
        }

        &::placeholder {
          color: #999999;
        }
      }
    }

    button {
      width: 100%;
      border-radius: 4px;
      border: none;
      height: 45px;
      margin: 2rem;

      background: #7d40e7;
      color: #fff;

      font-size: 1.6rem;
      font-weight: bold;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#7d40e7')};
      }

      &:active {
        background-color: #7d40e7;
        transform: translateY(4px);
      }
    }
  }
`;
