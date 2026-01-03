// 'use client'
// import CardItem from "@/components/ui/CardItem";
// import useFavorites from "@/hooks/useFavorites";
// import useSnackbar from "@/hooks/useSnackbar";
// import { fetchProductSearch } from "@/utils/api";
// import { Alert, Box, Snackbar, Typography } from "@mui/material";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function CategoryPage() {
//   const { open, message, severity, showSnackbar, closeSnackbar } = useSnackbar();
//   const { favorites, toggleFavorite } = useFavorites(showSnackbar);
//   // const {slug} = props.params;
//   const { slug } = useParams();
//   const [products, setProducts] = useState<any[]>([]);

//   useEffect(() => {
//     if (!slug) return;

//     (async () => {
//       const data = await fetchProductSearch(String(slug));
//       setProducts(data);
//     })();
//   }, [slug]);
  
//   const handleAddedToCart = (id: number, title: string) => {
//     showSnackbar(`${title} added to cart!`, "success");
//   };
//   return (
//     <Box>
//           <Typography variant="h4" sx={{ mt:2, ml:2}}>
//             Search Result: {slug? slug:"result not found"}
//           </Typography>
//       <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', alignContent: 'center', }}>
//         {products.map((item) => (
//           <CardItem
//             key={item.id}
//             id={item.id}
//             thumbnail={item.thumbnail}
//             title={item.title}
//             description={item.description}
//             rating={item.rating}
//             price={item.price}
//             isFavorite={!!favorites[item.id]}
//             onToggleFavorite={toggleFavorite}
//             onAddToCart={handleAddedToCart}
//           />
//         ))}
//       </Box>
//       <Snackbar
//         open={open}
//         autoHideDuration={3000}
//         onClose={closeSnackbar}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//       >
//         <Alert
//           severity={severity}
//           variant="filled"
//           sx={{ width: '100%' }}
//         >
//           {message}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// }

import { fetchProductSearch } from "@/utils/api";
import CategoryClientView from "./CategoryClientView";
import { getProductsBySlug } from "@/services/productService";

interface PageProps {
  params: { slug: string };
}

export default async function CategoryPage({ params }: PageProps) {
  // Next.js 15+ requires awaiting params if used in the body
  const { slug } = await params;

  // Using your specific function to get data
  const products = await getProductsBySlug(slug);
  return (
    <CategoryClientView 
      slug={slug} 
      initialProducts={products} 
    />
  );
}
