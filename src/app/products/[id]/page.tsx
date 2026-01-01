// import { useEffect, useState } from "react";
// import Image from "next/image";
// import {
//   Box,
//   Typography,
//   Rating,
//   Chip,
//   ToggleButton,
//   ToggleButtonGroup,
//   IconButton,
//   Button,
//   CircularProgress,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";p
// import RemoveIcon from "@mui/icons-material/Remove";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import { fetchProductById } from "@/utils/api";

// interface Review {
//   rating: number;
//   comment: string;
//   reviewerName: string;
// }

// type Product = {
//   id: number;
//   title: string;
//   description: string;
//   category: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   tags: string[];
//   images: string[];
//   thumbnail: string;
//   reviews: Review[];
// }

// export default async  function ProductViewPage ({ params }: { params: { id: string } }) {
//   const product: Product | null = await fetchProductById(Number(params.id));
//   // const [product, setProduct] = useState<Product | null>(null);
//   const [size, setSize] = useState<string>("M");
//   const [qty, setQty] = useState<number>(1);
//   const [loading, setLoading] = useState(true);

//   const handleSizeChange = (_: any, newSize: string) => {
//     if (newSize) setSize(newSize);
//   };
//   // useEffect(() => {
//   //   async function loadProduct() {
//   //     setLoading(true);

//   //     const data = await fetchProductById(Number(params.id));

//   //     if (data) {
//   //       setProduct(data as Product);
//   //     }

//   //     setLoading(false);
//   //   }

//   //   loadProduct();
//   // }, [params.id]);

//   if (loading || !product)
//     return (
//       <Box sx={{ p: 10, display: "flex", justifyContent: "center" }}>
//         <CircularProgress />
//       </Box>
//     );

//   const discountPrice = (
//     product.price -
//     product.price * (product.discountPercentage / 100)
//   ).toFixed(2);

//   return (
//     <Box sx={{ p: { xs: 2, md: 5 }, maxWidth: 1400, mx: "auto" }}>
//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
//           gap: 5,
//         }}
//       >
//         {/* LEFT SIDE - IMAGES */}
//         <Box>
//           {/* Main Image */}
//           <Box
//             sx={{
//               width: "100%",
//               borderRadius: 2,
//               overflow: "hidden",
//               boxShadow: 2,
//             }}
//           >
//             <Image
//               src={product.images[0] || product.thumbnail}
//               width={700}
//               height={700}
//               alt={product.title}
//               style={{ width: "100%", height: "auto", objectFit: "cover" }}
//             />
//           </Box>

//           {/* Thumbnails */}
//           <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
//             {product.images.map((img, i) => (
//               <Box
//                 key={i}
//                 sx={{
//                   width: 80,
//                   height: 80,
//                   borderRadius: 2,
//                   overflow: "hidden",
//                   border: "1px solid #ddd",
//                   cursor: "pointer",
//                 }}
//               >
//                 <Image
//                   src={img}
//                   alt="thumb"
//                   width={80}
//                   height={80}
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               </Box>
//             ))}
//           </Box>
//         </Box>

//         {/* RIGHT SIDE - DETAILS */}
//         <Box>
//           <Typography variant="h4" fontWeight="bold">
//             {product.title}
//           </Typography>

//           {/* Rating */}
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
//             <Rating value={product.rating} readOnly precision={0.1} />
//             <Typography variant="body2">
//               {product.reviews?.length} Reviews
//             </Typography>
//           </Box>

//           {/* Price */}
//           <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
//             <Typography
//               variant="h6"
//               sx={{ textDecoration: "line-through", color: "gray" }}
//             >
//               ${product.price}
//             </Typography>

//             <Typography variant="h5" color="primary">
//               ${discountPrice}
//             </Typography>

//             <Chip label={`${product.discountPercentage}% Off`} color="success" />
//           </Box>

//           {/* Description */}
//           <Typography sx={{ mt: 2, color: "gray" }}>
//             {product.description}
//           </Typography>

//           {/* Size Selector */}
//           <Box sx={{ mt: 4 }}>
//             <Typography fontWeight="bold">Select Size</Typography>

//             <ToggleButtonGroup
//               exclusive
//               value={size}
//               onChange={handleSizeChange}
//               sx={{ mt: 1 }}
//             >
//               {["S", "M", "L", "XL", "2XL"].map((s) => (
//                 <ToggleButton
//                   key={s}
//                   value={s}
//                   sx={{ px: 3, py: 1.2, fontWeight: "bold" }}
//                 >
//                   {s}
//                 </ToggleButton>
//               ))}
//             </ToggleButtonGroup>
//           </Box>

//           {/* Quantity + Cart */}
//           <Box
//             sx={{
//               mt: 4,
//               display: "flex",
//               alignItems: "center",
//               gap: 3,
//               flexWrap: "wrap",
//             }}
//           >
//             {/* Quantity Selector */}
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 border: "1px solid #ccc",
//                 borderRadius: 5,
//                 px: 1,
//               }}
//             >
//               <IconButton onClick={() => setQty(Math.max(1, qty - 1))}>
//                 <RemoveIcon />
//               </IconButton>

//               <Typography sx={{ px: 2, fontWeight: 600 }}>{qty}</Typography>

//               <IconButton onClick={() => setQty(qty + 1)}>
//                 <AddIcon />
//               </IconButton>
//             </Box>

//             <Button
//               variant="contained"
//               color="primary"
//               sx={{
//                 px: 5,
//                 py: 1.5,
//                 borderRadius: 10,
//                 textTransform: "none",
//                 fontSize: 16,
//               }}
//             >
//               Add to Cart
//             </Button>

//             <IconButton sx={{ border: "1px solid #ccc", borderRadius: "50%" }}>
//               <FavoriteBorderIcon />
//             </IconButton>
//           </Box>

//           {/* Tags */}
//           <Box sx={{ mt: 4 }}>
//             <Typography fontWeight="bold">Tags:</Typography>
//             <Box sx={{ display: "flex", gap: 1, mt: 1, flexWrap: "wrap" }}>
//               {product.tags?.map((tag, idx) => (
//                 <Chip key={idx} label={tag} variant="outlined" />
//               ))}
//             </Box>
//           </Box>

//           {/* Reviews */}
//           <Box sx={{ mt: 5 }}>
//             <Typography variant="h6" fontWeight="bold">
//               Customer Reviews
//             </Typography>

//             {product.reviews?.map((review, idx) => (
//               <Box key={idx} sx={{ mt: 2, p: 2, borderBottom: "1px solid #eee" }}>
//                 <Rating value={review.rating} readOnly size="small" />
//                 <Typography fontWeight="bold">{review.reviewerName}</Typography>
//                 <Typography color="gray">{review.comment}</Typography>
//               </Box>
//             ))}
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }







// type Product = {
//   id: number;
//   title: string;
//   description: string;
//   category: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   tags: string[];
//   images: string[];
//   thumbnail: string;
//   reviews: string[];
// }




















// import { fetchSingleProduct } from "@/utils/api";
// import Image from "next/image";
// import { Box, Typography, Card, CardContent, Rating } from "@mui/material";

// export default async function ProductPage({ params }: { params: { id: string } }) {
//   const product: any = await fetchSingleProduct(Number(params.id));

//   if (!product) {
//     return <Typography>Product not found...</Typography>;
//   }

//   return (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h4" fontWeight="bold" mb={2}>
//         {product.title}
//       </Typography>

//       <Image
//         src={product.thumbnail}
//         alt={product.title}
//         width={400}
//         height={350}
//         style={{ borderRadius: 12, objectFit: "cover" }}
//       />

//       <Typography variant="h6" mt={2}>Price: ${product.price}</Typography>

//       <Rating value={product.rating} precision={0.1} readOnly />

//       <Typography variant="body1" mt={1}>{product.description}</Typography>

//       <Box mt={3} display="flex" gap={2} flexWrap="wrap">
//         {product.images?.map((img: string, index: number) => (
//           <Image
//             key={index}
//             src={img}
//             alt={`image-${index}`}
//             width={120}
//             height={120}
//             style={{ borderRadius: 8, objectFit: "cover" }}
//           />
//         ))}
//       </Box>

//       <Typography variant="h5" mt={4} mb={2}>Reviews</Typography>

//       {product.reviews?.map((rev: any, index: number) => (
//         <Card key={index} sx={{ mb: 2 }}>
//           <CardContent>
//             <Rating value={rev.rating} readOnly size="small" />
//             <Typography fontWeight="bold">{rev.reviewerName}</Typography>
//             <Typography variant="body2">{rev.comment}</Typography>
//           </CardContent>
//         </Card>
//       ))}
//     </Box>
//   );
// }
