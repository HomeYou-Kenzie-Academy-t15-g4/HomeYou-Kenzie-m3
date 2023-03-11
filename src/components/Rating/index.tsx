import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import React, { useState } from 'react';
import StyledDivRating from './style';

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
      <div>4,77 · 26 comentários</div>
    </StyledDivRating>
  );
};

export default Ratinng;
