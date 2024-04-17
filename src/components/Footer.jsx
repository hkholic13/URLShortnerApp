import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'darkgray',
        color: 'white',
        textAlign: 'center',
        py: 2,
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: (theme) => theme.zIndex.paper + 1,
      }}
    >
      <Typography variant="body2">
       © Written by Himanshi
      </Typography>
    </Box>
  );
};

export default Footer;