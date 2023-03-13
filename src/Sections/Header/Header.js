import './Header.css'
//import NavItem  from '../NavItem/NavItem'
import React , {useState} from "react";
//import ReactDOM from 'react-dom' ;
import{AppBar,Tabs,Tab,Box, Toolbar, Typography} from "@mui/material"
import {Link} from "react-router-dom";

const Header = () => {
  const [value , setValue] = useState();
  return(
      <>
            <div>
              <AppBar position="sticky">
                <Toolbar>
                    <Typography > IMPORT / EXPORT </Typography>
                          <Box sx={{marginLeft:"auto"}}>
                            <Tabs 
                                indicatorColor="secondary"
                                onChange={(e, val) => setValue(val)}
                                value={value}
                                textColor="inherit"
                                >
                                <Tab to="/#" LinkComponent={Link} label="Home"/>
                                <Tab to="/login" LinkComponent={Link} label="Login"/>
                                <Tab to="/signup" LinkComponent={Link} label="Signup"/>
                            </Tabs> 
                          </Box>
                </Toolbar>
              </AppBar>
          </div>
          
        );
      
      </>
    
  );
};

export default Header; 