'use client'
import BannerSlider from './BannerSlider'
import Brands from './Brands'
import CardItem from '@/components/ui/CardItem'
import DetailCard from './DetailCard'
import { fetchProducts } from '@/utils/api'
import { Alert, Box, Snackbar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useFavorites from "@/hooks/useFavorites";
import useSnackbar from "@/hooks/useSnackbar";

export default function HomeProduct({ products }: { products: any[] }) {

  const { open, message, severity, showSnackbar, closeSnackbar } = useSnackbar();
  const { favorites, toggleFavorite } = useFavorites(showSnackbar);

    const handleAddedToCart =(id:number, title:string)=>{
      showSnackbar(`${title} added to cart!`,"success");
    };
  return (
    <Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', alignContent: 'center', }}>
        {products.map((item) => (
          <CardItem
            key={item.id}
            id={item.id}
            thumbnail={item.thumbnail}
            title={item.title}
            description={item.description}
            rating={item.rating}
            price={item.price}
            isFavorite={!!favorites[item.id]}
            onToggleFavorite={toggleFavorite}
            onAddToCart={handleAddedToCart}
          />
        ))}
      </Box>
    
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert
          severity={severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Box>
  )
}




