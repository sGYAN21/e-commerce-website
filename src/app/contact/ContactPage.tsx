"use client";

import {
  Box,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Grid,
  Card,
  CardMedia,
  Container,
} from "@mui/material";
import { Mail, Phone, LocationOn, Language } from "@mui/icons-material";


export default function ContactPage() {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden", bgcolor: "#fff",mt:10, pb: 10 }}>
      {/* ======= HEADER ======= */}
      <Box textAlign="center" py={6}>
        <Typography variant="h3" fontWeight={700} sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
          Contact Us
        </Typography>
        <Typography variant="body1" color="text.secondary" mt={1}>
          Reach out and let’s connect – your thoughts matter to us!
        </Typography>
      </Box>

      {/* ======= CONTACT SECTION ======= */}
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            p: { xs: 2, md: 1 },
            borderRadius: 4,
            boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
            bgcolor: "#fff",
          }}
        >
          {/* LEFT CONTACT BOX */}
          <Box
            sx={{
              background: "#003060", // Darker blue matching the image
              color: "#fff",
              borderRadius: 3,
              p: { xs: 4, md: 6 },
              width: { xs: "100%", md: "40%" },
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Typography variant="h5" fontWeight={600} mb={2}>
              Contact Information
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 6 }}>
              Fill up the form and our team will get back to you within 24 hours.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Box display="flex" alignItems="center" gap={2}>
                <Phone sx={{ color: "#fff" }} />
                <Typography>+91 98765 43210</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2}>
                <Mail sx={{ color: "#fff" }} />
                <Typography>domain@paypal.com</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2}>
                <Language sx={{ color: "#fff" }} />
                <Typography>https://paypal.com</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={2}>
                <LocationOn sx={{ color: "#fff" }} />
                <Typography>Location</Typography>
              </Box>
            </Box>

            {/* Decorative Circle Bottom Right */}
            <Box
              sx={{
                position: "absolute",
                bottom: "-50px",
                right: "-50px",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
              }}
            />
          </Box>

          {/* RIGHT FORM */}
          <Box sx={{ flex: 1, p: { xs: 2, md: 4 } }}>
            <Grid container spacing={4}>
              <Grid >
                <TextField fullWidth label="First Name" variant="standard" />
              </Grid>
              <Grid >
                <TextField fullWidth label="Last Name" variant="standard" />
              </Grid>
              <Grid >
                <TextField fullWidth label="Mail" variant="standard" />
              </Grid>
              <Grid >
                <TextField fullWidth label="Phone" variant="standard" />
              </Grid>

              <Grid>
                <Typography fontWeight={700} mt={2} mb={1}>
                  What Product do you need?
                </Typography>
                <RadioGroup row sx={{ gap: 1 }}>
                  <FormControlLabel value="macbook" control={<Radio size="small" />} label="Macbook Pro" />
                  <FormControlLabel value="smartphone" control={<Radio size="small" />} label="Smartphone" />
                  <FormControlLabel value="smartwatch" control={<Radio size="small" />} label="Smartwatch" />
                  <FormControlLabel value="clothing" control={<Radio size="small" />} label="Clothing" />
                  <FormControlLabel value="other" control={<Radio size="small" />} label="Other" />
                </RadioGroup>
              </Grid>

              <Grid >
                <TextField fullWidth multiline rows={1} label="Message" variant="standard" placeholder="Write your message..." />
              </Grid>

              <Grid  textAlign="right">
                <Button
                  variant="contained"
                  sx={{
                    background: "#003060",
                    px: 5,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": { background: "#001f3f" },
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      {/* ======= SEE OUR WORK ======= */}
      <Box textAlign="center" mt={12} mb={6}>
        <Typography variant="h4" fontWeight={700}>
          See Our Work
        </Typography>
        <Typography sx={{ maxWidth: "700px", mx: "auto", mt: 2, color: "text.secondary", px: 2 }}>
          Explore our comprehensive portfolio: a testament to our dedication, creativity, and expertise. Discover projects that showcase our commitment to excellence and innovation in every endeavor we undertake.
        </Typography>
      </Box>

    <Container maxWidth="lg">
  <Grid container spacing={3} justifyContent="center">
    {[1, 2, 3].map((item) => (
      /* xs={12}: Takes full width on mobile 
         sm={4}: Takes 1/3 width (4 out of 12 columns) on tablet/desktop 
      */
      <Grid key={item} sx={{display:'flex' , width:350, object:'fit'}}>
        <Card sx={{ borderRadius: 4, boxShadow: "none", overflow: "hidden" }}>
          <CardMedia
            component="img"
            // Ensure these paths match your actual public/images folder
            image={`/images/${item}.jpg`} 
            alt="Work item"
            sx={{ 
              height: 350, 
              width: "100%", 
              objectFit: "cover" 
            }}
          />
        </Card>
      </Grid>
    ))}
  </Grid>
  <Box textAlign="center" mt={6}>
    <Button
      variant="contained"
      sx={{
        background: "#1a4d80",
        borderRadius: 2,
        px: 4,
        py: 1.2,
        textTransform: "none",
      }}
    >
      See All Products
    </Button>
  </Box>
</Container>
      {/* ======= NEWSLETTER ======= */}
      <Box sx={{ mt: 15, py: 8, bgcolor: "#f8f9fa", borderTop: "1px solid #eee" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: 4,
            }}
          >
            <Box textAlign={{ xs: "center", md: "left" }}>
              <Typography variant="h5" fontWeight={700}>
                Subscribe our Newsletter
              </Typography>
              <Typography color="text.secondary">
                Pellentesque eu nibh eget mauris congue mattis mattis.
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", md: "500px" },
                bgcolor: "#fff",
                p: 0.5,
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}
            >
              <TextField
                placeholder="Your email address"
                variant="standard"
                InputProps={{ disableUnderline: true }}
                sx={{ flex: 1, px: 2, py: 1 }}
              />
              <Button
                variant="contained"
                sx={{
                  background: "#003060",
                  px: 4,
                  borderRadius: 1.5,
                  textTransform: "none",
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}