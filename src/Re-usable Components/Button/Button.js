import React from 'react'
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';



const ColorButton = styled(Button)((props) => ({
    color: props.textColor,
    backgroundColor: props.bgColor,
    textTransform:'none',
    borderRadius:"20px",
    padding:"1% 5%",
    margin:"3%",
    fontSize:props.fontSize,
    '&:hover': {
      backgroundColor:props.hoverColor,
    },
  }));

export default ColorButton