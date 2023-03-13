import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 23px;

  .labelPhotos {
    margin-top: -18px;
    margin-bottom: -7px;
  }

  .errorPhotos {
    margin-top: -23px;
  }
`;

export const StyledDivReturnToLogin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const StyledFieldset = styled.fieldset`
  border: none;
  p {
    max-width: 25ch;
  }
`;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const reactSelectStyle = {
  control: (baseStyles: any, state: any) => ({
    ...baseStyles,
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    fontWeight: '300',
    fontSize: '1rem',
    lineHeight: '1.4375em',
    letterSpacing: '0.00938em',
    borderRadius: '15px',
    minHeight: '56px',
    marginTop: '-13px',
    maxWidth: '74vw',
    borderColor: 'rgba(0, 0, 0, 0.87)',
    color: 'rgba(0, 0, 0, 0.4)',
    cursor: 'text',
    border: state.isSelected ? 'none' : '1px solid rgba(0, 0, 0, 0.87)',
    outline: state.isFocused ? '2px solid #0C6B38' : 'none',
    paddingLeft: '6px',
  }),
};

export const StyleMuiSelector = {
  width: '100%',
  '& label.Mui-focused': {
    color: '#0C6B38',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#0C6B38',
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '15px',
    '& fieldset': {
      borderColor: '#343B41',
    },
    '&:hover fieldset': {
      borderColor: '#04C35C',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0C6B38',
    },
  }
};

export const StyleMuiSelectorMidWidth = {
  width: '45%',
  '& label.Mui-focused': {
    color: '#0C6B38',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#0C6B38',
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '15px',
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
};
