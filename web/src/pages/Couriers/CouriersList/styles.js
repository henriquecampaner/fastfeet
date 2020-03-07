import styled from 'styled-components';

export const TableContainer = styled.section`
  margin-top: 20px;
  width: 100%;
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
    align-items: center;
    background: #fff;
    border-radius: 5px;
  }

  .divTableCell {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 3px 10px;
    width: 20%;

    &:first-child {
      width: 6%;
    }

    &:last-child {
      width: 10%;
    }

    img {
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
  }

  /* .status {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 35px;
    padding: 5px 2px;
    margin: auto 0;

    span {
      font-weight: bold;
    }

    svg {
      margin-right: 10px;
    }
  } */
`;
