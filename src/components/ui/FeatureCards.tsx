"use client";

import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCards({ title, description, icon }: FeatureCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
         width: 320,     // Square size
    height: 320,
        position: "relative",
        borderRadius: "18px",
        p: 2,
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 6px 26px rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* Blue bottom-left triangle shape */}
      <Box
        sx={{
          borderLeft: "60px solid #0d63f8",
          borderTop: "60px solid transparent",
          borderBottomRightRadius: "16px",
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      />

      <CardContent sx={{ position: "relative" }}>
        {/* Icon */}
        <Avatar
          sx={{
            width: 56,
            height: 56,
            bgcolor: "#0d63f8",
            mb: 2,
          }}
        >
          <Image src={icon} alt={title} width={30} height={30} />
        </Avatar>

        {/* Title */}
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          {title}
        </Typography>

        {/* Description */}
        <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
