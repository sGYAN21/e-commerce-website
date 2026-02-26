'use client';

import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  Typography, 
  IconButton, 
  Stack, 
  Button, 
  Divider, 
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface CartItemProps {
  image: string;
  title: string;
  price: number;
  originalPrice: number;
  discount: string;
}

const CartCard = ({ image, title, price, originalPrice, discount }: CartItemProps) => {
  const [quantity, setQuantity] = useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card elevation={0} sx={{ p: 2, mb: 2, borderBottom: '1px solid #e0e0e0', borderRadius: 0 }}>
      <Stack direction={isMobile ? 'column' : 'row'} spacing={3}>
        
        {/* Product Image */}
        <Box 
          component="img"
          src={image}
          alt={title}
          sx={{ 
            width: isMobile ? '100%' : 180, 
            height: 180, 
            objectFit: 'contain',
            backgroundColor: '#f9f9f9',
            borderRadius: 1
          }}
        />

        {/* Product Details */}
        <Box sx={{ flex: 1 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            <Typography variant="h6" sx={{ fontWeight: 500, fontSize: '1.1rem', mb: 1 }}>
              {title}
            </Typography>
            
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                ₹{price.toLocaleString()}
              </Typography>
              <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>
                M.R.P.: ₹{originalPrice.toLocaleString()}
              </Typography>
              <Chip 
                label={`${discount} off`} 
                size="small" 
                color="error" 
                sx={{ borderRadius: 1, mt: 0.5, fontWeight: 700, height: 20, fontSize: '0.65rem' }} 
              />
            </Box>
          </Stack>

          <Typography variant="body2" color="success.main" sx={{ mb: 1, fontWeight: 500 }}>
            In stock
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
             <Box sx={{ bgcolor: '#232f3e', color: 'white', px: 1, borderRadius: 0.5, fontSize: '0.7rem' }}>
                ✓ Fulfilled
             </Box>
          </Stack>

          {/* Action Row: Quantity and Buttons */}
          <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
            {/* Quantity Selector */}
            <Stack 
              direction="row" 
              alignItems="center" 
              sx={{ border: '1px solid #ddd', borderRadius: '20px', px: 1, py: 0.5 }}
            >
              <IconButton size="small" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                {quantity === 1 ? <DeleteOutlineIcon fontSize="small" /> : <RemoveIcon fontSize="small" />}
              </IconButton>
              <Typography sx={{ mx: 2, fontWeight: 700 }}>{quantity}</Typography>
              <IconButton size="small" onClick={() => setQuantity(quantity + 1)}>
                <AddIcon fontSize="small" />
              </IconButton>
            </Stack>

            {/* Other Actions */}
            <Button size="small" sx={{ textTransform: 'none', color: '#007185' }}>Delete</Button>
            <Divider orientation="vertical" flexItem sx={{ my: 1 }} />
            <Button size="small" sx={{ textTransform: 'none', color: '#007185' }}>Save for later</Button>
            <Divider orientation="vertical" flexItem sx={{ my: 1 }} />
            <Button size="small" sx={{ textTransform: 'none', color: '#007185' }}>See more like this</Button>
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
};

export default CartCard;