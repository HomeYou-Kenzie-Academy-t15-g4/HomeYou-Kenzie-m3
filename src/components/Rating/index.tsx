import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import React, { useState } from 'react';
import StyledDivRating from './style';
import { StyledParagraph } from '../../styles/typograthy';

const Ratinng = () => {
  const [value, setValue] = useState<number | null>(4);

  return (
    <StyledDivRating>
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Rating name='read-only' value={value} readOnly />
      </Box>
      <StyledParagraph> 26 Comentários</StyledParagraph>
    </StyledDivRating>
  );
};

export default Ratinng;
