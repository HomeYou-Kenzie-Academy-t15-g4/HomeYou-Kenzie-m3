import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#0C6B38',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#0C6B38',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#343B41',
    },
    '&:hover fieldset': {
      borderColor: '#04C35C',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0C6B38',
    },
  },
});
