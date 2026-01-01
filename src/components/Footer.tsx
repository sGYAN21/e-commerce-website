// components/Footer.tsx

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#001F3F', color: 'grey.100', pt: 7, pb: 3 ,mt:2}}>
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          px: 2,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: { xs: 4, md: 0 },
        }}
        >
        {/* Subscribe Section */}
        <Box sx={{ minWidth: 300, flex: 1, mb: 2, mr: 3 }}>
           <Box
              component="img"
              src="/images/logo.png"
              alt="Logo"
              sx={{
                width: 150,
                height: 50,
                marginLeft:0
              }}
            />
          <Typography variant="subtitle1" gutterBottom>Contact Us</Typography>
      
          <TextField
            variant="outlined"
            placeholder="Enter your email"
            size="small"
            sx={{
              bgcolor: 'grey.800',
              borderRadius: '10px',
              input: { color: 'grey.100' },
              width: '100%',
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton sx={{ color: 'grey.100' }}>
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Support */}
        <Box sx={{ minWidth: 300, flex: 1, mb: 2 }}>
          <Typography variant="h6" gutterBottom>Support</Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Delhi<br />
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            shopsy@gmail.com
          </Typography>
          <Typography variant="body2">
            +88015-88888-9999
          </Typography>
        </Box>

        {/* Account */}
        <Box sx={{ minWidth: 150, flex: 1, mb: 2, mr: 3 }}>
          <Typography variant="h6" gutterBottom>Account</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="#" color="inherit" underline='none'>My Account</Link>
            <Link href="#" color="inherit" underline='none'>Login / Register</Link>
            <Link href="#" color="inherit" underline='none'>Cart</Link>
            <Link href="#" color="inherit" underline='none'>Wishlist</Link>
            <Link href="#" color="inherit" underline='none'>Shop</Link>
          </Box>
        </Box>

        {/* Quick Links */}
        <Box sx={{ minWidth: 150, flex: 1, mb: 2, mr: 3 }}>
          <Typography variant="h6" gutterBottom>Quick Link</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="#" color="inherit" underline='none'>Privacy Policy</Link>
            <Link href="#" color="inherit" underline='none'>Terms Of Use</Link>
            <Link href="#" color="inherit" underline='none'>FAQ</Link>
            <Link href="#" color="inherit" underline='none'>Contact</Link>
          </Box>
        </Box>

        {/* Download App */}
        <Box sx={{ minWidth: 200, flex: 1, mb: 2 }}>
          <Typography variant="h6" gutterBottom>Download App</Typography>


          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2, my: 1, }}>
              <Button
                variant="contained"
                startIcon={<AppleIcon />}
                sx={{ bgcolor: 'grey.800', boxShadow: 0, color: 'common.white', textTransform: 'none', }}
              >
                App Store
              </Button>
              <Button
                variant="contained"
                startIcon={<GoogleIcon />}
                sx={{ bgcolor: 'grey.800', boxShadow: 0, color: 'common.white', textTransform: 'none' }}
              >
                Google Play
              </Button>
            </Box>
          </Box>
          {/* Social Icons */}
          <Box sx={{
            display: 'flex', gap: 2, mt: 2, '& svg:hover': {
              color: 'goldenrod',
              transform: 'translateX(5px)',
              transition: 'all 400ms',

            }
          }}>
            <IconButton sx={{ color: 'grey.100' }}><FacebookIcon sx={{ fontSize:'35px',}}/></IconButton>
            <IconButton sx={{ color: 'grey.100' }}><TwitterIcon sx={{ fontSize:'35px',}}/></IconButton>
            <IconButton sx={{ color: 'grey.100' }}><InstagramIcon sx={{ fontSize:'35px',}}/></IconButton>
            <IconButton sx={{ color: 'grey.100' }}><LinkedInIcon sx={{ fontSize:'35px',}}/></IconButton>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ my: 2, borderColor: 'grey.800' }} />
      <Box sx={{ textAlign: 'center', color: 'grey.600' }}>
        <Typography variant="body2">
          © Copyright GYAN SAGAR 2025. All right reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
