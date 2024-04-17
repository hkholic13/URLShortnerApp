import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import logo from "../logo.png"
export default function Header() {
  return (
    <AppBar position="fixed" color="inherit">
        <Toolbar >
         <img src={logo} style={{ height: '48px', marginLeft: '45px',  zIndex: (theme) => theme.zIndex.Paper + 1 }} ></img>
          <Typography noWrap variant="h6"  sx={{fontFamily:"roboto",marginRight:'90px',textAlign: 'center', width: '100%' }}>
            URLShortnerApp
          </Typography>
        </Toolbar>
      </AppBar>
  )
}
