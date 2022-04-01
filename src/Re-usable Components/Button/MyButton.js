import React from 'react'
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';


function MyButton(props) {
    const { children ,colorBg,textColor} = props;
    const styleB = {
      textDecoration:"none",
      padding:"2% 7%",
      margin:"3%",
      backgroundColor:colorBg,
      border:"none",
      borderRadius:"15px",
      color:textColor,
      fontSize:"22px",
      fontWeight:500,
      cursor:"pointer"

  }
    return (
      <button style={styleB} type="submit">{children}</button>
    );
  }


  export default MyButton