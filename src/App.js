
import React from 'react';
import Signup from './Components/Signup'
import Login from './Components/Login'
import Welcom from './Components/Welcom'
//import { Container } from './Components/index';
import { Header} from './Sections/index'
import { Route , Routes } from "react-router-dom"
import { Container } from '@mui/system';
import {Home} from './Pages/index'
import Welcome from './Sections/Body/Welcome'
//import { BounceLoader, BarLoader, BeatLoader} from 'react-spinners'
function App() {
  return (
    <>
        <Header />
        <Container>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/welcom' element={<Welcom />} />
          <Route path='/hero' element={<Home />} />
        </Routes>
        <Welcome />
        </Container>
    
    </>
  )
}

export default App;
