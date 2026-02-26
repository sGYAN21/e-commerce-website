
import { Box, Typography, Grid, SvgIcon, styled } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ReplyAllOutlinedIcon from '@mui/icons-material/ReplyAllOutlined';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import React from 'react';

interface Feature {
  icon: React.ElementType;
  title: string;
  subtitle: string;

}


const features: Feature[] = [
  {
    icon: LocalShippingOutlinedIcon,
    title: 'Free Shipping',
    subtitle: 'Free shipping with discount',

  },
  {
    icon: SupportAgentIcon,
    title: 'Great Support 24/7',
    subtitle: 'Instant access to Contact',
 
  },
  {

    icon: ShoppingBagOutlinedIcon,
    title: '100% Sucure Payment',
    subtitle: 'We ensure your money is safe',

  },
  {

    icon: ReplyAllOutlinedIcon,
    title: 'Money-Back Guarantee',
    subtitle: '30 days money-back',

  },
];


const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: '50%',
  marginBottom: theme.spacing(1.5),

}));

export default function DetailCard() {
  return (
    <Box
      sx={{
        m:1,
        width: '100%',
        maxWidth: 1200,
        mx: 'auto',
        py: 4,
        p:1,
        borderBottom: '1px solid #ddd',
        // '@media (max-width: 600px)': {
        //   py: 1,
        // }
      }}
    >
      <Grid container spacing={2} justifyContent="space-between" sx={{ backgroundColor: '#E1E2E4', p: 2, borderRadius: 5 }}>
        {features.map((feature, index) => (
          <Grid
            
            key={index}
            sx={{
              textAlign: 'center',
              position: 'relative',

            }}
            >
            <IconContainer>
              <SvgIcon 
              component={feature.icon} 
              sx={{
                color:'#001F3F',
            
                fontSize: 50,
                '@media (max-width: 600px)': {
                  fontSize: 35,
                  
                }
              }} />
            </IconContainer>

            <Typography variant="subtitle1" fontWeight="bold" color="text.secondary" gutterBottom sx={{
              '@media(max-width: 600px)':{
                fontSize:14
              }
            }}>
              {feature.title}
            </Typography>

            <Typography variant="body2" 
            color="text.secondary"
            
            sx={{
              '@media(max-width: 600px)':{
                fontSize:12,
                
              }
            }}>
              {feature.subtitle}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}