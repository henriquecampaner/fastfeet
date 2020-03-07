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
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 3px 10px;

    &:first-child {
      width: 10%;
      margin-left: 8px;
    }

    &:nth-child(2) {
      width: 75%;
    }

    &:last-child {
      width: 10%;
      justify-content: center;
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
`;
