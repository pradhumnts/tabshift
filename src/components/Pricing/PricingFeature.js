import React from 'react'
import { Box, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const PricingFeature = (props) => {

  return (
    <Box sx={{ display: "flex", gap: 2, my: 3 }}>
        {props.check ?  <CheckIcon sx={{  fontSize: '20px', fontWeight: 900, color: "#14a800" }} /> : <CloseIcon sx={{  fontSize: '20px', fontWeight: 500 }} color="primary"/>}
        <Typography fontWeight={500}>{props.text}</Typography>
    </Box>
  )
}

export default PricingFeature