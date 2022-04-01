import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MainLogo from "../../../Icons/FAVI_ 4.png";
import { Typography, Button } from "@mui/material";
import { Link, useNavigate} from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../../../Context/authContext";

export const Verification = () => {
  const { setUpReCaptcha } = useUserAuth();

  const [number, setNumber] = useState("");
  const [err, setErr] = useState("");
  const [otp,setOtp] = useState("")
  const [flag,setFlag] = useState(false)
  const [confirm,setConfirm] = useState("")

  const navigate = useNavigate()

  const getOtp = async (e) => {
    e.preventDefault();
    setErr("");
    if (number === "" || number === undefined)
      return setErr("Enter your phone no.");
    try {
      const response = await setUpReCaptcha(number);
      setConfirm(response);
      setFlag(true);
    } catch (err) {
      setErr(err.message)
    }
  };


  const verifyOtp = async (e) => {
      e.preventDefault()
      if(otp === " " || otp===null) return 
      try{
          setErr("")
          await confirm.confirm(otp)
          navigate('/')
      }
      catch(err){
          setErr(err.message)
      }
  }
console.log(err)
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
              <Typography
                variant="h4"
                component="h4"
                style={{ fontWeight: "500" }}
                gutterBottom
              >
                {!flag ?  "Enter your Phone Number" : `Enter the verification code for ${number}`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
            {!flag  && <div id="recaptcha-container" />}
            </Grid>
            {/* for the verify number to get otp */}
            <Grid item xs={12}>
            <form noValidate onSubmit={getOtp} style={{display: !flag ? "block" : "none"}}>
              <Grid item xs={12}>
                <PhoneInput
                  defaultCountry="IN"
                  value={number}
                  onChange={setNumber}
                  placeholder="XXX-XXX-XXXX"
                  className="phone-field"
                />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Sign Up
                </Button>
              </Grid>
            </form>
            </Grid>

            {/* to verify the otp */}
            <Grid item xs={12}>
            <form noValidate onSubmit={verifyOtp} style={{display: flag ? "block" : "none"}}>
              <Grid item xs={12}>
               
                <input type="otp" placeholder="XXXXXX" className="input-field" onChange={e => setOtp(e.target.value)} />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  {!flag ? "Sign Up" : "Continue"}
                </Button>
              </Grid>
            </form>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </>
  );
};
