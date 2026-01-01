'use client'
import { Box } from '@mui/material'
import React from 'react'
import BannerSlider from './BannerSlider'
import DetailCard from './DetailCard'
import Brands from './Brands'

export default function HomeDetails({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <BannerSlider />
      <DetailCard />
     
      {children}
      <Brands />
    </Box>
  )
}