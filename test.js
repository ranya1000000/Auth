/*
<h3> Sign UP</h3>
    
    <label>
    Name:
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </label>
    <label>
    Surname:
    <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
    </label>

    <label>Email:</label>
    <input
    type="email"
    onChange={(e)=>setEmail(e.target.value)}
    value={email}
    />
    <label>Password:</label>
    <input
    type="password"
    onChange={(e)=>setPassword(e.target.value)}
    value={password}
    />
    <label>
    Date of Birth:
    <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
    </label>
    <label>
    Adress:
    <input type="text" value={adress} onChange={(e) => setAdress(e.target.value)} />
    </label>
    <label>
    Phone Number:
    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
    </label>


    const handleChange = (e) => {
    this.setInputs({value: e.target.value});
  }

*/

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <h3>Contact Us</h3>
      <a
        href="https://www.youtube.com/c/jamesqquick"
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/learnbuildteach/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/learnbuildteach"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}

/*
//css

.App {
  font-family: sans-serif;
  text-align: center;
}

// SOCIAL STUFF 
.social-container {
  background: #eee;
  padding: 25px 50px;
}
a.social {
  margin: 0 1rem;
  transition: transform 250ms;
  display: inline-block;
}

a.social:hover {
  transform: translateY(-2px);
}

a.youtube {
  color: #eb3223;
}

a.facebook {
  color: #4968ad;
}

a.twitter {
  color: #49a1eb;
}

a.instagram {
  color: black;
} */


//login
/*<div>
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
          <Typography  variant="h3"> Welcome Back </Typography>
      
            <TextField name="email" onChange={handleChange} type={"email"} value={inputs.email}variant="outlined" placeholder="Email" margin="normal"/>
            <TextField name="password" onChange={handleChange} type={"password"} value={inputs.password}variant="outlined" placeholder="Password" margin="normal"/>
                  <Button variant="contained" type="submit">
                      Login
                  </Button> 
          </Box>
  
        </form>
    </div> */


    // header bootstrop

    /*{
      <div class="navbar navbar-expand-md bg-dark navbar-dark text-white fixed-top">
      <div class="container">
          <a href="#" class="navbar-brand">Bootstrap Tutorial</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mainmenu">
              <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                  <a href="#hero" class="nav-link">Get Started</a>
                  </li>
                  <li class="nav-item">
                  <a href="#features" class="nav-link">Features</a>
                  </li>
                  <li class="nav-item dropdown">
                      <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Learn</a>
                      <ul class="dropdown-menu">
                          <li><a href="#learn" class="dropdown-item">Learn Bootstrap</a></li>
                          <li><a href="#next" class="dropdown-item">Where to go next</a></li>
                      </ul>
                  </li>
                  <li class="nav-item">
                  <a href="#faq" class="nav-link">Ask Me</a>
                  </li>
                  <li class="nav-item">
                  <a href="./index-ar.html" class="nav-link">عربي</a>
                  </li>
              </ul>
          </div>
      </div>
  </div>

    }*/