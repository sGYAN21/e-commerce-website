import CartItem from './components/CartCard';
import { Container, Typography, Box, Paper } from '@mui/material';

export default function CartPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={0} sx={{ p: 3, border: '1px solid #ddd' }}>
        <Typography variant="h4" sx={{ mb: 3, fontWeight: 500 }}>
          Shopping Cart
        </Typography>
        
        <CartItem 
          title="Logitech MX Master 3S with Free Adobe Subscription - Wireless Performance Mouse"
          image="/images/mouse.jpg" // Add your image to public/images/
          price={7995}
          originalPrice={12495}
          discount="36%"
        />

        <Box sx={{ textAlign: 'right', mt: 2 }}>
            <Typography variant="h6">
              Subtotal (1 item): <strong>₹7,995.00</strong>
            </Typography>
        </Box>
      </Paper>
    </Container>
  );
}