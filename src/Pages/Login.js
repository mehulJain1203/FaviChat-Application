import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MainLogo from "../Icons/FAVI_ 4.png";
import { Typography, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import './Login.css'
import MyButton from "../Re-usable Components/Button/MyButton";

export const Login = () => {

  const {register,handleSubmit} = useForm()
 
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
              <form noValidate onSubmit={handleSubmit((data) => console.log(data))}>
              <Grid item xs={12}>
                <input type="text" {...register("fName")} placeholder="Username" className="input-field" />
                </Grid>
                <Grid item xs={12}>
                <input type="password" {...register("password")} placeholder="Password"  className="input-field"/>
                  </Grid>
  
                <Grid item xs={12}>
                  
                    <MyButton colorBg="#FF92B2" textColor="white">Login</MyButton>
                 
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
