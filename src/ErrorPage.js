import React from 'react'
import { Box, Typography } from '@mui/material'


const ErrorPage = () => {
  return (
    <Box sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <Typography variant='h4' mb={2} fontWeight={600}>Oops, You came to the wrong place.</Typography>
        <Typography>Following page does not exists, please check the url once again.</Typography>
    </Box>
  )
}

export default ErrorPage