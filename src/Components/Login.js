import './Login.css'
import React, { useState } from "react";
import{Box, Typography, TextField, Button} from "@mui/material"
import axios from "axios";
import { NavLink,useNavigate } from "react-router-dom";
//import { ToastContainer } from 'react-toastify';

const Login = () => {
  
  const history = useNavigate(); 
  const [inputs, setInputs ] = useState({
  email:"",
  password:""
  }) ;

  const sendRequest=async () =>{
    const res = await axios.post ("http://localhost:4000/api/login",{

      email: inputs.email,
      password: inputs.password,

    }).catch((err) => console.log(err));
    const data = await res.data;
    return data;

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // sending request http
    sendRequest().then(() => history("/welcom")) 
  };  
  const handleChange = (e) =>{
    setInputs(prev =>({
      ...prev,
      [e.target.name]: e.target.value 
    }))
  };

  return(

    <>
    <div>
    <form  onSubmit={handleSubmit}>
      <Box
        marginLeft="60%"
        marginRight="auto"
        marginTop="70px"
        width={400}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        
      >
        <Typography  variant="h4"> Welcome Back , Log In </Typography>
    
          <TextField name="email" onChange={handleChange} type={"email"} value={inputs.email}variant="outlined" placeholder="Email" margin="normal"/>
          <TextField name="password" onChange={handleChange} type={"password"} value={inputs.password}variant="outlined" placeholder="Password" margin="normal"/>
                <Button variant="contained" type="submit">
                    Login
                </Button> 
          <Typography> Don't have an Account ! <NavLink to="/signup">Sign up</NavLink></Typography>
          <Typography> Forget Password ?  <NavLink to="/verifEmail">Click here</NavLink></Typography>

        </Box>

      </form>
  </div>
    
    </>

    )
  
  }

export default Login
