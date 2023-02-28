import React from 'react'
import { Typography, Box } from '@mui/material'

const ServiceItem = (props) => {
  return (
    <Box sx={{ display: "flex", gap: 2 }} className={props.className}>
        <img src={props.svg} style={{ width: "55px", height: "55px" }} alt="" />
        <Box>
            <Typography variant='h6' fontWeight={600}>{props.title}</Typography>
            <Typography fontSize={props.captionShort ? 14 : 16}>{props.caption}</Typography>
        </Box>
    </Box>
  )
}

export default ServiceItem