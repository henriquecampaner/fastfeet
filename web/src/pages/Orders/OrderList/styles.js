import styled from 'styled-components';

export const TableContainer = styled.section`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 20px 10px;
  .divTable {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .divTableRow {
    font-size: 1.6rem;
    display: flex;
    justify-content: space-between;
    background: #fff;
    border-radius: 5px;
  }
  .divTableCell {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 3px 10px;
    width: 15%;
    &:first-child {
      width: 5%;
    }

    &:nth-child(6) {
      width: 15%;
    }

    &:last-child {
      width: 10%;
      justify-content: center;
    }
  }

  .deliveryman {
    display: flex;
    align-items: center;
    margin: auto 0;
    img {
      margin-right: 10px;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 35px;
    }
  }

  .title {
    font-weight: bold;
    background: transparent;
    margin-bottom: 10px;
  }

  .content {
    margin-bottom: 10px;
    height: 55px;

    @media (max-width: 1000px) {
      div:nth-child(6) {
        width: 15%;
      }
    }
  }

  .status {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 35px;
    padding: 5px 2px;
    margin: auto 0;
    width: 11%;

    span {
      font-weight: bold;
    }

    svg {
      margin-right: 10px;
    }
  }
`;
