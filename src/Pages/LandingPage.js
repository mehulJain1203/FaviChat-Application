import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MainLogo from '../Icons/FAVI_ 4.png'
import { Typography,Button } from '@mui/material';
import { Link } from 'react-router-dom';
import MyButton from '../Re-usable Components/Button/MyButton';

export const LandingPage = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ height: "100vh" }}>
          <Grid container>
            <Grid item xs={12}>
              <img
                src={MainLogo}
                height="80%"
                width="max-width"
                style={{ marginTop: "12%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2" component="h2" style={{marginTop:"-7%",fontWeight:"500"}} gutterBottom>
                FaviChat
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" component="h4" style={{fontWeight:'500',marginBottom:"7%"}} >
                Exclusive connection with anyone
              </Typography>
            </Grid>
            <Grid item/>
            <Grid item xs={12}>
              <Link to='/verification'>
                <MyButton colorBg="#E1E1E1" textColor="black" >Sign Up</MyButton>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link to='/login' style={{textDecoration:"none"}}>
              <MyButton colorBg="#FF92B2" textColor="white">Login</MyButton>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
