import styled from 'styled-components';

const StyledFormEditUserPic = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  button {
    background-color: #04c35c;
    border-radius: 8px;
    margin-bottom: 2rem;
    cursor: pointer;
  }

  .modalContentEdit {
    width: 80%;
    display: flex;
    flex-direction: column;
  }
`;

export default StyledFormEditUserPic;
