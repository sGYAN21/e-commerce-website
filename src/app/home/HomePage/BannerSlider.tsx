"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Box, Button, Typography } from "@mui/material";
import { fetchSingleProduct } from "@/utils/api";


type Product = {
  id: number,
  title: string,
  rating: number,
  thumbnail: string,
  brand: string,
  discountPercentage: string,
}

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  const [product, setProduct] = useState<any[]>([])
  useEffect(() => {
    (async () => {
      const productIds = [29, 3, 5, 7, 19, 9]
      const allProducts: any[] = []
      for (const id of productIds) {
        const product = await fetchSingleProduct(id)
        if (product) allProducts.push(product)
      }
      setProduct(allProducts)
    })();
  }, [])

  return (
    <Box sx={{
      width: "100%",
      overflow: "hidden",
      height: 500,
      backgroundImage: "url('images/banner1.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      '@media (max-width:900px)': {
        height: '60%'
      }
    }}>
      <Slider {...settings}>

        {product.map((slide: Product) => (

          <Box
            key={slide.id}
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: 280, md: 430 },
            }}
            >

            <Box
              component="img"
              src={slide.thumbnail}
              alt="banner"
              sx={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(255,255,255,0.3)",
                borderRadius: 20,
                ml: 2,
                mt: 1,
                width: "auto",
                height: "100%",
                object: "cover",
                '@media (max-width:600px)': {
                  width:'40%',
                  height: '85%'
                },
                '@media (max-width:400px)': {
                  position: "absolute",
                  top:"20%",
                  width:'50%',
                  height: '60%'
                }
              }}
            />

            {/* Text Box */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: { xs: "50%", md: "70%" },
                transform: "translate(-50%, -50%)",
                color: "#fff",
                textAlign: { xs: "center", md: "left" },
                '@media (max-width:900px)': {
                  top: "50%",
                  left: { xs: "70%" },

                },
              }}
            >
              <Typography variant="h4" fontWeight={700} sx={{
                fontSize: 50,
                '@media (max-width:900px)': {
                  mt: 0,
                  p: 0.5,
                  fontSize: '2rem'
                },
                '@media (max-width:600px)': {
                  fontSize: '1.2rem'
                }
              }}>
                {slide.title}
              </Typography>
              <Typography variant="h5" sx={{
                fontSize: 30,
                fontWeight: 800, mt: 1, p: 1, bgcolor: '#001F3F', border: 3, borderRadius: '16px',
                '@media (max-width:900px)': {
                  mt: 0,
                  p: 0.5,
                  fontSize: '1.2rem'
                },
                '@media (max-width:600px)': {
                  fontSize: '0.8rem'
                }
              }}>
                Upto {slide.discountPercentage}% Off
              </Typography>
              <Typography variant="h6" sx={{
                mt: 1, mb: 2, fontWeight: 900, fontSize: 35, '@media (max-width:600px)': {
                  fontSize: '1.2rem'
                }
              }}>
                ⭐ {slide.rating}
              </Typography>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#fff",
                  color: "purple",
                  fontWeight: 600,
                  borderRadius: "25px",
                  px: 2,
                }}
              >
                Buy Now
              </Button>
            </Box>

          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default BannerSlider;
