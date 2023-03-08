import { TextField } from '@mui/material';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledFieldText = styled(TextField)`
  width: 100%;

  input {
    font-family: 'Montserrat', sans-serif;
  }

  label {
    &.Mui-focused {
      color: ${({ theme }) => theme.color.primary};
    }
  }

  .Mui-focused {
    fieldset {
      border-color: ${({ theme }) => theme.colorprimaryFocus};
      outline-color: ${({ theme }) => theme.colorprimaryFocus};
    }
  }
`;

export default { StyledForm, StyledFieldText };
