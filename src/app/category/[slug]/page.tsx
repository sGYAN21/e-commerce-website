'use client'
import CardItem from "@/components/ui/CardItem";
import useFavorites from "@/hooks/useFavorites";
import useSnackbar from "@/hooks/useSnackbar";
import { fetchCategoryProducts, fetchProductSearch } from "@/utils/api";
import { Alert, Box, Snackbar } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const { open, message, severity, showSnackbar, closeSnackbar } = useSnackbar();
  const { favorites, toggleFavorite } = useFavorites(showSnackbar);
  // const {slug} = props.params;
  const { slug } = useParams();
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    if (!slug) return;

    (async () => {
      const data = await fetchCategoryProducts(slug as string);
      setProducts(data);
    })();

  }, [slug]);


  const handleAddedToCart = (id: number, title: string) => {
    showSnackbar(`${title} added to cart!`, "success");
  };
  return (
    <Box sx={{mb:5}}>
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
        autoHideDuration={3000}
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
  );
}