'use client'

import { useState } from "react";
import {
  Box, Typography, Rating, Chip, ToggleButton,
  ToggleButtonGroup, IconButton, Button, Divider, Stack
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LockIcon from "@mui/icons-material/Lock";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function ProductViewPage({ product }: { product: any }) {
  const [size, setSize] = useState<string>("S");
  const [qty, setQty] = useState<number>(1);
  const [activeTab, setActiveTab] = useState(0);

  const handleSizeChange = (_: any, newSize: string) => {
    if (newSize) setSize(newSize);
  };

  const offers = [
    "Bank Offer 10% off on Federal Bank Credit Card Txns, up to ₹1,500 on orders of ₹5,000 and above T&C",
    "Bank Offer 10% instant discount on PNB Credit Card, up to ₹2,000, on orders of ₹5,000 and above T&C",
    "Bank Offer 10% off on Federal Bank Debit Card Txns, up to ₹1,250 on orders of ₹5,000 and above T&C",
    "Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or more T&C",
  ];

  const discountPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1200, mx: "auto", bgcolor: "white" }}>
      {/* Breadcrumbs */}
      <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: "block" }}>
        Home / {product.category} / <b>{product.title}</b>
      </Typography>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
        {/* LEFT: Vertical Thumbnails & Main Image */}
        <Box sx={{ display: "flex", gap: 2, flex: 1.2 }}>
          <Stack spacing={1} alignItems="center" sx={{ display: { xs: "none", sm: "flex" } }}>
            <IconButton size="small"><KeyboardArrowUpIcon /></IconButton>
            {product.images?.slice(0, 4).map((img: string, i: number) => (
              <Box key={i} sx={{ width: 70, height: 85, borderRadius: 1, overflow: "hidden", border: "1px solid #eee" }}>
                <img src={img} alt="thumb" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>
            ))}
            <IconButton size="small"><KeyboardArrowDownIcon /></IconButton>
          </Stack>

          <Box sx={{ flex: 1, borderRadius: 4, overflow: "hidden", bgcolor: "#f5f5f5" }}>
            <img src={product.thumbnail} alt={product.title} style={{ width: "100%", height: "auto" }} />
          </Box>
        </Box>

        {/* RIGHT: Product Details */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>{product.title}</Typography>

          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
            <Rating value={product.rating} readOnly size="small" precision={0.1} />
            <Typography variant="body2" color="text.secondary">{product.reviews?.length || 0} Reviews • Stock: {product.stock}</Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ textDecoration: "line-through", color: "#999" }}>${product.price}</Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#003d73" }}>${discountPrice}</Typography>
            <Chip label={`${Math.round(product.discountPercentage)}% Off`} size="small" sx={{ bgcolor: "#ffebf0", color: "#d32f2f", fontWeight: 700 }} />
          </Stack>

          <Divider sx={{ mb: 3 }} />

          {/* Color & Size */}
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>Select size</Typography>
          <ToggleButtonGroup value={size} exclusive onChange={(_, s) => s && setSize(s)} sx={{ mb: 4, gap: 1 }}>
            {["S", "M", "L", "XL", "2XL", "3XL"].map((s) => (
              <ToggleButton key={s} value={s} sx={{ borderRadius: '8px !important', border: '1px solid #ddd !important', px: 3 }}>{s}</ToggleButton>
            ))}
          </ToggleButtonGroup>

          {/* Quantity & Actions */}
          <Stack direction="row" spacing={2} alignItems="center" mb={2}>
            <Box sx={{ display: "flex", alignItems: "center", bgcolor: "#f0f2f5", borderRadius: 10, px: 1 }}>
              <IconButton onClick={() => setQty(Math.max(1, qty - 1))} size="small"><RemoveIcon /></IconButton>
              <Typography sx={{ width: 30, textAlign: "center", fontWeight: 700 }}>{qty}</Typography>
              <IconButton onClick={() => setQty(qty + 1)} size="small"><AddIcon /></IconButton>
            </Box>
            <IconButton sx={{ bgcolor: "#f0f2f5", p: 1.5 }}><FavoriteBorderIcon /></IconButton>

          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Button variant="contained" fullWidth startIcon={<LockIcon />} sx={{ bgcolor: "#003d73", borderRadius: 10, py: 1.5, textTransform: "none" }}>
              Add to Cart
            </Button>
            <Button variant="contained" fullWidth sx={{ bgcolor: "#003d73", borderRadius: 10, py: 1.5, textTransform: "none" }}>
              Buy Now
            </Button>
          </Stack>

        </Box>
      </Box>

      {/* BOTTOM: Offers (Based on Image 1) */}
      <Box sx={{ mt: 8 }}>
        <Stack direction="row" spacing={4} sx={{ borderBottom: "1px solid #eee", mb: 3 }}>
          {["Descriptions", "Additional Information", "Customer Feedback"].map((label, idx) => (
            <Typography
              key={label}
              onClick={() => setActiveTab(idx)}
              sx={{
                pb: 1,
                cursor: "pointer",
                fontWeight: 600,
                color: activeTab === idx ? "#003d73" : "text.secondary",
                borderBottom: activeTab === idx ? "3px solid #003d73" : "none",
              }}
            >
              {label}
            </Typography>
          ))}
        </Stack>

        <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
            {product.description}
        </Typography>

        <Stack spacing={2}>
          {offers.map((offer, i) => (
            <Stack key={i} direction="row" spacing={2} alignItems="flex-start">
              <CheckCircleIcon sx={{ color: "#003d73", fontSize: 20, mt: 0.3 }} />
              <Typography variant="body2" color="text.secondary">
                {offer.split("T&C")[0]} <b style={{ color: "#003d73", cursor: "pointer" }}>T&C</b>
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}