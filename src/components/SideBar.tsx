"use client";
import React, { useState } from "react";
import {
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Collapse,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import WatchIcon from "@mui/icons-material/Watch";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ChairIcon from '@mui/icons-material/Chair';
import GlassesIcon from "@mui/icons-material/RemoveRedEye";
import AddIcon from "@mui/icons-material/Add";
import WorkIcon from '@mui/icons-material/Work';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import IceSkatingIcon from '@mui/icons-material/IceSkating';
import TabIcon from '@mui/icons-material/Tab';
import EarbudsIcon from '@mui/icons-material/Earbuds';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import CountertopsIcon from '@mui/icons-material/Countertops';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropDown";
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import { useRouter } from "next/navigation";
type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false)
  const router = useRouter();
  const categories = [
        { label: "Mens Shirts",slug:'mens-shirts', icon: <ManIcon /> },
    { label: "Mens Shoes",slug:'mens-shoes', icon: <IceSkatingIcon /> },
    { label: "Mens Watches",slug:'mens-watches', icon: <WatchIcon /> },
    { label: "Womens Bags",slug:'womens-bags', icon: <WorkIcon /> },
    { label: "Womens Dresses",slug:'womens-dresses', icon: <WomanIcon /> },
    { label: "Womens Jewellery",slug:'womens-jewellery', icon: <GlassesIcon /> },
    { label: "Womens Shoes",slug:'womens-shoes', icon: <IceSkatingIcon /> },
    { label: "Womens Watches",slug:'womens-watches', icon: <WatchIcon /> },
    { label: "Tops",slug:'tops', icon: <CheckroomIcon /> },
    { label: "Smartphones",slug:'smartphones', icon: <SmartphoneIcon /> },
    { label: "Tablets",slug:'tablets', icon: <TabIcon /> },
    { label: "Laptops",slug:'laptops', icon: <LaptopMacIcon /> },
    { label: "Mobile Accessories",slug:'mobile-accessories', icon: <EarbudsIcon /> },
    { label: "Home Decoration",slug:'home-decoration', icon: <HomeFilledIcon /> },
    { label: "Furniture",slug:'furniture', icon: <ChairIcon /> },
    { label: "Kitchen Accessories",slug:'kitchen-accessories', icon: <CountertopsIcon /> },
    { label: "Motorcycle",slug:'motorcycle', icon: <TwoWheelerIcon /> },
    { label: "Vehicle",slug:'vehicle', icon: <DirectionsCarIcon /> },
    { label: "Fragrances",slug:'fragrances', icon: <SanitizerIcon /> },
    { label: "Groceries",slug:'groceries', icon: <FoodBankIcon /> },
    { label: "Skin Care",slug:'skin-care', icon: <GlassesIcon /> },
    { label: "Sports Accessories",slug:'sports-accessories', icon: <SportsCricketIcon /> },
    { label: "Sunglasses",slug:'sunglasses', icon: <GlassesIcon /> },

  ];
  const handleNavigation = (slug: string) => {
    
    router.push(`/category/${slug}`);

    onClose();
  };
  const handleViewAll = () => {
      router.push(`/categories`); 
  };
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        sx={{

          width: 270,
          height: "100%",
          bgcolor: "#101010",
          color: "white",
        }}
      >
        {/* Header */}

        <ListItemButton
          sx={{ background: '#1E293B', '&:hover': { bgcolor: '#001F3F' }, }}
          onClick={() => setOpenDropdown((prev) => !prev)}
        >
          <MenuIcon sx={{ mr: 2 }} />
          <Typography sx={{ flexGrow: 1 }}>All Categories</Typography>
          {openDropdown ? < ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </ListItemButton>

        {/* Dropdown List */}

        <Collapse in={openDropdown}>
          <List>
            {categories.map((item) => (

              <ListItemButton
                key={item.label}
                onClick={() => handleNavigation(item.slug)}
                sx={{
                  borderBottom: '1px solid #2a2a2a',
                  bgcolor: '#111',
                  "&: hover": { bgcolor: "#1a1a1a" },
                }}
              >
                <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>

            ))}
          </List>
        </Collapse>

        {/* View All Category */}
        <ListItemButton
        onClick={handleViewAll}
          sx={{
            borderTop: "1px solid #2a2a2a",
            mt: 1,
            bgcolor: "#111",
            "&:hover": { bgcolor: "#1a1a1a" },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="View all Category" />
        </ListItemButton>

      </Box>
    </Drawer>
  );
};

export default Sidebar;
