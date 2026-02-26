'use client'
import { Box } from '@mui/material'
import React from 'react'
import BannerSlider from '../components/BannerSlider'
import DetailCard from '../components/DetailCard'
import Brands from '../components/Brands'

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