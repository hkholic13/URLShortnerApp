import Box from '@mui/material/Box';
import Header from './components/Header';
import InputCard from './components/InputCard';
import Typewriter from 'typewriter-effect/dist/core';
import Body from './components/Body';
import Footer from './components/Footer';



function App() {
  return (
    <Box display={'flex'} sx={{height:"100vh", overflow:"auto" ,backgroundColor:"black"}}>
      <Header/>
      <InputCard/>
      <Footer/>
    </Box>
  );
}

export default App;
