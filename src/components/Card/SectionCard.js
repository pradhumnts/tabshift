import React from 'react'
import { Box, Typography } from '@mui/material'

const SectionCard = (props) => {
  return (
    <Box>
        <Typography variant="h5" fontWeight={600} mt={5} mb={2}>
          {props.header}
        </Typography>
        <Box>
            {props.children}
        </Box>
    </Box>
  )
}

export default SectionCard