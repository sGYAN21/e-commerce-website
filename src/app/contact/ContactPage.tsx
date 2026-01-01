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
    CardContent,
} from "@mui/material";
import { Mail, Phone, LocationOn } from "@mui/icons-material";

export default function ContactPage() {
    return (
        <Box sx={{ width: "100%", overflowX: "hidden" }}>
            {/* ======= HEADER ======= */}
            <Box textAlign="center" mt={4} mb={2}>
                <Typography variant="h4" fontWeight={700}>
                    Contact Us
                </Typography>
                <Typography variant="body2" color="gray">
                    Reach out and let’s connect – your thoughts matter to us!
                </Typography>
            </Box>

            {/* ======= CONTACT SECTION ======= */}
            <Box sx={{ display: 'flex',  }}>

                <Box
                    sx={{ px: { xs: 2, md: 10 }, py: 5, display: 'flex' }}
                    alignItems="center"
                >
                    {/* LEFT CONTACT BOX */}

                    <Box
                        sx={{
                            background: "#001f3f",
                            color: "#fff",
                            borderRadius: 3,
                            p: 8,
                            width: 600,
                            height:600,
                        }}
                    >
                        <Typography variant="h6" fontWeight={600} mb={2}>
                            Contact Information
                        </Typography>
                        <Typography variant="body2" mb={3}>
                            Fill up the form and our team will get back to you within 24 hours.
                        </Typography>

                        <Box display="flex" alignItems="center" gap={2} mb={2}>
                            <Phone />
                            <Typography>+91 98745 43210</Typography>
                        </Box>

                        <Box display="flex" alignItems="center" gap={2} mb={2}>
                            <Mail />
                            <Typography>domain@paypall.com</Typography>
                        </Box>

                        <Box display="flex" alignItems="center" gap={2} mb={2}>
                            <Mail />
                            <Typography>https://paypal.com</Typography>
                        </Box>

                        <Box display="flex" alignItems="center" gap={2}>
                            <LocationOn />
                            <Typography>Location</Typography>
                        </Box>
                    </Box>

                    {/* RIGHT FORM */}
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent:'center',
                            gap: 2,
                            ml:15
                        }}
                    >
                        {/* First Name */}
                        <Box sx={{ width: {  md: "48%" } }}>
                            <TextField  label="First Name" variant="standard" />
                        </Box>

                        {/* Last Name */}
                        <Box sx={{ width: {  md: "48%" } }}>
                            <TextField  label="Last Name" variant="standard" />
                        </Box>

                        {/* Mail */}
                        <Box sx={{ width: {  md: "48%" } }}>
                            <TextField  label="Mail" variant="standard" />
                        </Box>

                        {/* Phone */}
                        <Box sx={{ width: {  md: "48%" } }}>
                            <TextField  label="Phone" variant="standard" />
                        </Box>

                        {/* Product Options - Full Width */}
                        <Box sx={{ width: "100%" }}>
                            <Typography fontWeight={600} mb={1}>
                                What Product do you need?
                            </Typography>

                            <RadioGroup row>
                                <FormControlLabel value="macbook" control={<Radio />} label="Macbook Pro" />
                                <FormControlLabel value="smartphone" control={<Radio />} label="Smartphone" />
                                <FormControlLabel value="smartwatch" control={<Radio />} label="Smartwatch" />
                                <FormControlLabel value="clothing" control={<Radio />} label="Clothing" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </Box>

                        {/* Message */}
                        <Box sx={{ width: "100%" }}>
                            <TextField
                                
                                multiline
                                rows={4}
                                label="Message"
                                variant="standard"
                            />
                        </Box>

                        {/* Submit Button */}
                        <Box sx={{ width: "100%" }}>
                            <Button
                                variant="contained"
                                sx={{
                                    textTransform: "none",
                                    px: 4,
                                    borderRadius: 5,
                                     bgcolor: '#001f3f',
                                     '&:hover':{
                                        bgcolor:'black'
                                     }
                                }}
                            >
                                Send Message
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* ======= SEE OUR WORK ======= */}
            <Box textAlign="center" mt={5}>
                <Typography variant="h5" fontWeight={700}>
                    See Our Work
                </Typography>
                <Typography width="70%" mx="auto" mt={1} color="gray">
                    Explore our comprehensive portfolio showcasing our dedication,
                    creativity, and expertise.
                </Typography>
            </Box>

            {/* PRODUCT IMAGES */}
            <Grid
                container
                spacing={3}
                sx={{ px: { xs: 2, md: 10 }, py: 5 }}
                justifyContent="center"
            >
                {[1, 2, 3].map((item, index) => (
                    <Grid key={index}>
                        <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
                            <CardMedia
                                component="img"
                                height="260"
                                image={`/images/work${index + 1}.jpg`}
                                alt="Product Image"
                            />
                        </Card>
                    </Grid>
                ))}

                <Box textAlign="center" width="100%" mt={2}>
                    <Button
                        variant="contained"
                        sx={{
                            background: "#0A74DA",
                            borderRadius: 5,
                            textTransform: "none",
                        }}
                    >
                        See All Products
                    </Button>
                </Box>
            </Grid>

            {/* ======= NEWSLETTER ======= */}
            <Box
                sx={{
                    background: "#f7f7f7",
                    py: 5,
                    px: 3,
                    textAlign: "center",
                }}
            >
                <Typography variant="h6" fontWeight={700}>
                    Subscribe our Newsletter
                </Typography>
                <Typography color="gray" mb={2}>
                    Get regular updates in your email inbox.
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                        flexWrap: "wrap",
                    }}
                >
                    <TextField
                        placeholder="Your email address"
                        sx={{ width: { xs: "90%", md: "300px" } }}
                    />
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: 3,
                            textTransform: "none",
                        }}
                    >
                        Subscribe
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
