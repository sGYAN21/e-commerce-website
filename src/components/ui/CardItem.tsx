import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, IconButton, Rating } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Link from 'next/link';
interface CardItemProps {
  id:number;
  thumbnail: string;
  title: string;
  description: string;
  rating: number
  price: number;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onAddToCart: (id: number, title: string) => void;
}
const CardItem: React.FC<CardItemProps> = ({id, thumbnail, title, rating, description, price, isFavorite,
  onToggleFavorite, onAddToCart }) => {
  //     const handleClick = () => {
  //   router.push(`/${id}`);
  // };
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); 
    onToggleFavorite(id);
  };

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(id, title);
  };

  const handleBuyNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

  };
  return (
    <Link href={`/product/${id}`} style={{ textDecoration: "none" }}>
    <Card elevation={10} sx={{
      maxWidth: 400, m: 2, p: 1, borderRadius: 3, 
      cursor: 'pointer', 
       boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        transition: "all 0.9s ease",
        display: 'flex',
      flexDirection: 'column',
      height: '100%',
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: "0 6px 26px rgba(0,0,0,0.12)",
            backgroundColor: '#E1E2E4'
        },
  
      '@media (max-width:1374px)': {
            
                 maxWidth: 360,
                },
      '@media (max-width:600px)': {
            ml:2,
                 maxWidth: 450,
                }
    }}>
      <Box sx={{ position: 'relative' }}>
        <IconButton
          // onClick={() => onToggleFavorite(id)}
          onClick={handleFavoriteClick}
          sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1, p: 0, ml: 3, }}>
          {isFavorite ? (
            <FavoriteIcon sx={{ color: '#001F3F', fontSize: 35 }} />
          ) : (
            <FavoriteBorderIcon sx={{ color: '#001F3F', fontSize: 35 }} />
          )}
        </IconButton>
        <CardMedia

          component="img"
          alt={title}

          height="390"
          image={thumbnail}
          sx={{ objectFit: "cover", borderRadius: 2, backgroundColor: '#E9EEF6', }}
        />
      </Box>

      <CardContent>
        <Box sx={{ display: 'flex' }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </Box>
          <Box sx={{display:'flex', flexDirection:'row', mb:1}}>
        <Rating  sx={{mr:1,}}size="large" value={Number(rating)} precision={0.2} readOnly />
        <Typography sx={{ fontSize: 18, }}>
            {rating}
        </Typography>
        </Box>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button 
        // onClick={() => onAddToCart(id, title)}
        onClick={handleAddToCartClick}
        size="medium" variant='contained' sx={{
          backgroundColor: '#001F3F', borderRadius: 5, color: 'white', '&:hover': {
            backgroundColor: 'black',
          },
        }}>Add to Cart</Button>
        <Typography variant='h5' sx={{ fontWeight: 800, fontSize: 25 }}>
          $ {price}
        </Typography>
        <Button 
        onClick={handleBuyNowClick}
        size="medium" variant='contained' sx={{
          backgroundColor: '#001F3F', borderRadius: 5, color: 'white', '&:hover': {
            backgroundColor: 'black',
          },
        }}>Buy Now</Button>
        

      </CardActions>
    </Card>
     </Link>
  );
}
export default CardItem;