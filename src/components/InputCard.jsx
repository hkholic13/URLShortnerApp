import React from 'react'
import { Paper, Box } from '@mui/material';
import Form from './Form';
import Body from './Body';
export default function InputCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          marginLeft: 10,
          marginTop:20,
          height:"200px"
        },
      }}
    >
      <Paper elevation={3} style={{backgroundColor:"white"}}>
        <Form/>
      </Paper>
      <Body/>
    </Box>
  )
}
