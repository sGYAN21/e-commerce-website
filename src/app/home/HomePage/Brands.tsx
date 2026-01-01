"use client";

import { Box, Typography, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import "./homepage.css";
import Link from "next/link";
const brands = [
  { name: "HP", logo: "/brandLogo/hp.png" },
  { name: "boat", logo: "/brandLogo/boat.png" },
  { name: "Apple", logo: "/brandLogo/apple.png" },
  { name: "Dell", logo: "/brandLogo/dell.png" },
  { name: "LG", logo: "/brandLogo/lg.png" },
  { name: "Louis Vuitton", logo: "/brandLogo/sony.png" },
];

export default function Brands() {
  return (
    <Box sx={{ px: 4, py: 6,mt:2, borderRadius:5, width: "100%", bgcolor:'#E1E2E4' }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Brands
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            color: "primary.main",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          <Link href='/all-brands'>
          View All
          <ArrowForwardIcon sx={{ ml: 0.5, fontSize: 18 }} />
          </Link>
        </Box>
      </Box>

      {/* Brand Logos */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {brands.map((brand) => (
          <Box
            key={brand.name}
            sx={{
         
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "0.3s",
              position: "relative",
              width: { xs: 50, sm: 70, md: 100, lg: 120 },
              height: { xs: 30, sm: 50, md: 80, lg: 100 },
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            
            <Image
              src={brand.logo}
              alt={brand.name}
              width={90}
              height={90}
              style={{ objectFit: "contain" }}
              className="brand-img"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
