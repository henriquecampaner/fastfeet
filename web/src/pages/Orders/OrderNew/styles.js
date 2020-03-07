import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 20px;
  width: 100%;
  background: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 20px 10px;

  form {
    display: flex;
    flex-wrap: wrap;
    width: 95%;
    justify-content: space-between;

    span {
      font-size: 1.4rem;
      font-weight: bold;
      margin-top: 20px;
    }

    .select-container {
      width: 48%;
    }

    .product-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;

      input {
        height: 45px;
        border-radius: 4px;
        border: 1px solid #dddddd;
        background: #ffffff 0% 0% no-repeat padding-box;
        padding-left: 10px;
        margin-top: 10px;

        &:focus {
          border: 1px dotted #7d40e7;
        }

        &::placeholder {
          color: #999999;
        }
      }
    }
  }
`;
