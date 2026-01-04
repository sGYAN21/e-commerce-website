// "use client";
// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import { Box, Button, Typography } from "@mui/material";
// import { fetchSingleProduct } from "@/utils/api";


// type Product = {
//   id: number,
//   title: string,
//   rating: number,
//   thumbnail: string,
//   brand: string,
//   discountPercentage: string,
// }

// const BannerSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     autoplay: true,
//     autoplaySpeed: 3500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//   };
//   const [product, setProduct] = useState<any[]>([])
//   useEffect(() => {
//     (async () => {
//       const productIds = [29, 3, 5, 7, 19, 9]
//       const allProducts: any[] = []
//       for (const id of productIds) {
//         const product = await fetchSingleProduct(id)
//         if (product) allProducts.push(product)
//       }
//       setProduct(allProducts)
//     })();
//   }, [])

//   return (
//     <Box sx={{
//       width: "100%",
//       overflow: "hidden",
//       height: 500,
//       backgroundImage: "url('images/banner1.jpg')",
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//       backgroundRepeat: "no-repeat",
//       '@media (max-width:900px)': {
//         height: '60%'
//       }
//     }}>
//       <Slider {...settings}>

//         {product.map((slide: Product) => (

//           <Box
//             key={slide.id}
//             sx={{
//               position: "relative",
//               width: "100%",
//               height: { xs: 280, md: 430 },
//             }}
//             >

//             <Box
//               component="img"
//               src={slide.thumbnail}
//               alt="banner"
//               sx={{
//                 backdropFilter: "blur(10px)",
//                 backgroundColor: "rgba(255,255,255,0.3)",
//                 borderRadius: 20,
//                 ml: 2,
//                 mt: 1,
//                 width: "auto",
//                 height: "100%",
//                 object: "cover",
//                 '@media (max-width:600px)': {
//                   width:'40%',
//                   height: '85%'
//                 },
//                 '@media (max-width:400px)': {
//                   position: "absolute",
//                   top:"20%",
//                   width:'50%',
//                   height: '60%'
//                 }
//               }}
//             />

//             {/* Text Box */}
//             <Box
//               sx={{
//                 position: "absolute",
//                 top: "50%",
//                 left: { xs: "50%", md: "70%" },
//                 transform: "translate(-50%, -50%)",
//                 color: "#fff",
//                 textAlign: { xs: "center", md: "left" },
//                 '@media (max-width:900px)': {
//                   top: "50%",
//                   left: { xs: "70%" },

//                 },
//               }}
//             >
//               <Typography variant="h4" fontWeight={700} sx={{
//                 fontSize: 50,
//                 '@media (max-width:900px)': {
//                   mt: 0,
//                   p: 0.5,
//                   fontSize: '2rem'
//                 },
//                 '@media (max-width:600px)': {
//                   fontSize: '1.2rem'
//                 }
//               }}>
//                 {slide.title}
//               </Typography>
//               <Typography variant="h5" sx={{
//                 fontSize: 30,
//                 fontWeight: 800, mt: 1, p: 1, bgcolor: '#001F3F', border: 3, borderRadius: '16px',
//                 '@media (max-width:900px)': {
//                   mt: 0,
//                   p: 0.5,
//                   fontSize: '1.2rem'
//                 },
//                 '@media (max-width:600px)': {
//                   fontSize: '0.8rem'
//                 }
//               }}>
//                 Upto {slide.discountPercentage}% Off
//               </Typography>
//               <Typography variant="h6" sx={{
//                 mt: 1, mb: 2, fontWeight: 900, fontSize: 35, '@media (max-width:600px)': {
//                   fontSize: '1.2rem'
//                 }
//               }}>
//                 ⭐ {slide.rating}
//               </Typography>

//               <Button
//                 variant="contained"
//                 sx={{
//                   bgcolor: "#fff",
//                   color: "purple",
//                   fontWeight: 600,
//                   borderRadius: "25px",
//                   px: 2,
//                 }}
//               >
//                 Buy Now
//               </Button>
//             </Box>

//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
// };

// export default BannerSlider;
"use client";
import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Box, Button, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { fetchSingleProduct } from "@/utils/api";

type Product = {
  id: number;
  title: string;
  rating: number;
  thumbnail: string;
  brand: string;
  discountPercentage: string;
};

const BannerSlider = () => {
  const [product, setProduct] = useState<Product[]>([]);
  
  // 1. Initialize Embla with your screenshot settings
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,           // Loop setting from image
      align: "center",      // Alignment setting from image
      containScroll: "trimSnaps" 
    }, 
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  // Navigation Logic
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    (async () => {
      const productIds = [29, 3, 5, 7, 19, 9];
      const allProducts: Product[] = [];
      for (const id of productIds) {
        const p = await fetchSingleProduct(id);
        if (p) allProducts.push(p);
      }
      setProduct(allProducts);
    })();
  }, []);

  return (
    <Box sx={{ 
      mt:8,
      position: "relative", 
      width: "100%", 
      height: { xs: 300, sm: 400, md: 500 },
      backgroundImage: "url('images/banner1.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      overflow: "hidden",
      '@media (max-width:450px)': { width: '100%', height: '50%' },
    }}>
      
      {/* Embla Viewport */}
      <Box ref={emblaRef} sx={{ overflow: "hidden", height: "100%" ,}}>
        <Box sx={{ display: "flex", height: "100%" }}>
          {product.map((slide) => (
            <Box
              key={slide.id}
              sx={{
                flex: "0 0 100%", // Slide size 100% from image
                minWidth: 0,
                position: "relative",
                height: { xs: 280, md: 430 },
              }}
            >
              {/* Product Image */}
              <Box
                component="img"
                src={slide.thumbnail}
                alt={slide.title}
                sx={{
                  backdropFilter: "blur(10px)",
                  backgroundColor: "rgba(255,255,255,0.3)",
                  borderRadius: 20,
                  ml: 10, mt: 2,
                  height: "100%",
                  objectFit: "contain",
                  '@media (max-width:600px)': { width: '40%',ml:1, height: '85%' },
                }}
              />

              {/* Text Content */}
              <Box sx={{
                position: "absolute",
                top: "50%",
                left: { xs: "72%", sm: "70%", md: "70%" },
                transform: "translate(-50%, -50%)",
                color: "#fff",
                textAlign: { xs: "center", md: "left" },
              }}>
                <Typography variant="h4" fontWeight={700} sx={{ fontSize: { xs: '1.2rem', md: 50 } }}>
                  {slide.title}
                </Typography>
                <Typography variant="h5" sx={{ 
                  fontWeight: 800, mt: 1, p: 1, bgcolor: '#001F3F', 
                  borderRadius: '16px', fontSize: { xs: '0.8rem', md: 30 } 
                }}>
                  Upto {slide.discountPercentage}% Off
                </Typography>
                <Typography variant="h6" sx={{ mt: 1, mb: 2, fontWeight: 900 }}>
                  ⭐ {slide.rating}
                </Typography>
                <Button variant="contained" sx={{ bgcolor: "#fff", color: "purple", borderRadius: "25px" }}>
                  Buy Now
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Navigation Arrows */}
   <IconButton
        onClick={scrollPrev}
        sx={{ 
          position: "absolute", left: 5, top: "50%", color: "white", 
          bgcolor: "rgba(0,0,0,0.3)", display: { xs: 'none', sm: 'flex' },
          "&:hover": { bgcolor: "rgba(0,0,0,0.5)" } 
        }}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </IconButton>
      <IconButton
        onClick={scrollNext}
        sx={{ 
          position: "absolute", right: 5, top: "50%", color: "white", 
          bgcolor: "rgba(0,0,0,0.3)", display: { xs: 'none', sm: 'flex' },
          "&:hover": { bgcolor: "rgba(0,0,0,0.5)" } 
        }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>

      {/* Dot Navigation */}
      <Box sx={{ 
        position: "absolute", bottom: 20, width: "100%", 
        display: "flex", justifyContent: "center", gap: 1 
      }}>
        {product.map((_, index) => (
          <Box
            key={index}
            onClick={() => scrollTo(index)}
            sx={{
              width: 12, height: 12, borderRadius: "50%",
              cursor: "pointer",
              bgcolor: selectedIndex === index ? "white" : "rgba(255,255,255,0.4)",
              transition: "background-color 0.3s"
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BannerSlider;