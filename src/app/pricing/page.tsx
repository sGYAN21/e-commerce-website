import { Box } from '@mui/material'
import React from 'react'
import PricingCards from './PricingCards'
import PricingCards1 from './pricingCards1'

function page() {
  return (
    <Box sx={{ bgcolor:"#f9fafb"}}>
      <PricingCards/>
      <PricingCards1/>
    </Box>
  )
}

export default page
