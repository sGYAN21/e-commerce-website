'use client'
import CardItem from "@/components/ui/CardItem";
import useFavorites from "@/hooks/useFavorites";
import useSnackbar from "@/hooks/useSnackbar";
import { Alert, Box, Snackbar, Typography } from "@mui/material";

interface CategoryClientViewProps {
  slug: string;
  initialProducts: any[];
}

export default function CategoryPage({ slug, initialProducts }: CategoryClientViewProps) {
  const { open, message, severity, showSnackbar, closeSnackbar } = useSnackbar();
  const { favorites, toggleFavorite } = useFavorites(showSnackbar);

  const handleAddedToCart = (id: number, title: string) => {
    showSnackbar(`${title} added to cart!`, "success");
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mt: 2, ml: 2 }}>
        Search Result: {slug ? decodeURIComponent(slug) : "result not found"}
      </Typography>
      
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
        {initialProducts.map((item) => (
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

      <Snackbar open={open} autoHideDuration={3000} onClose={closeSnackbar}>
        <Alert severity={severity} variant="filled" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
