import React from 'react';
import { Toolbar, Box, Typography } from '@mui/material';
import Typewriter from 'typewriter-effect';

export default function Body() {
  return (
    <Box sx={{
      
    }}>
        {/* Container for the Typewriter component */}
        <Typography variant="h6" sx={{ color: "darkgrey" }}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Get shorter links in seconds..').start();
            }}
          />
        </Typography>
        <Typography p sx={{color:"grey"}}>
        URLs tends to get lengthy, especially when parameters and query strings are attached. This can  get annoying when you want to share a link. For example, long URLs can eat into your character limit on social media platforms. Because of this, websites offering URL-shortening services like Bitly, TinyURL, and Short.io have cropped up.
        </Typography>
    </Box>
  );
}
