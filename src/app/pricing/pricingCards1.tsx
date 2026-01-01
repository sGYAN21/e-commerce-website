"use client";

import { Box, Card, CardContent, Button, Typography, Grid, Stack, Divider } from "@mui/material";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface PlanCardProps {
    title: string;
    price: string;
    priceNote: string;
    image: string;
    planType?: string;
    features: string[];
}

const PlanCard = ({ title, price, priceNote, image, planType, features }: PlanCardProps) => {
    return (
        <>
            <Box
                sx={{ textAlign: "center", }} >

                <Card
                    sx={{
                        // bgcolor:'#E1E2E4',
                        borderRadius: 5,
                        // border: 1,
                        boxShadow: 3,
                        p: 2,
                        width: 500,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        transition: "transform 0.3s ease",
                        '&:hover': {
                            transform: "translateY(10px)", // moves card downward
                            boxShadow: 4,
                        },
                    }}
                >

                    <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                        {planType && (
                            <Typography
                                variant="caption"
                                sx={{
                                    background: "green",
                                    color: "white",
                                    px: 2,
                                    py: 1,
                                    borderRadius: 5,
                                    position: "relative",
                                    top: -30,
                                    left: 339,
                                    width: "fit-content",

                                    fontSize: 15
                                }}
                            >
                                {planType}
                            </Typography>
                        )}
                        {/* <Box sx={{display: "flex", justifyContent: "center"}}>

                        </Box> */}
                        <Box sx={{ display: "flex", justifyContent: "center", mt: 1, mb: 5 }}>
                            <Typography
                                variant="h4"
                                sx={{ justifyContent: 'center', fontWeight: 600, color: "white", bgcolor: '#0d5fe5', p: 1, pl: 2, pr: 2, borderRadius: 5, width: "fit-content" }}
                            >
                                {title}
                            </Typography>
                        </Box>

                        <Box textAlign="center">
                            <Image src={image} alt={title} width={110} height={110} />

                            <Typography variant="subtitle1" mt={1} fontSize={30} fontWeight={800}>
                                Starting price
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: "center" }}>
                                <Typography variant="h3" fontWeight={700} fontSize={70} color="#0d5fe5" >
                                    {price}
                                </Typography>
                                <Typography variant="body2" sx={{ position: 'relative', top: 35, fontSize: 20 }}>{priceNote}</Typography>
                            </Box>

                            <Stack direction="row" spacing={5} justifyContent="center" mt={2}>
                                <Button variant="outlined" sx={{ color: 'black', fontWeight: 600, borderColor: "black", borderRadius: 3 }}>Start Now</Button>
                                <Button variant="contained" sx={{ bgcolor: 'black', color: 'white', fontWeight: 600, borderRadius: 3 }}>Free Trial</Button>
                            </Stack>
                        </Box>
                        <Divider sx={{ mt: 2 }} />
                        <Typography variant="h6" mt={2} fontWeight={700}>
                            What's Included in Plans
                        </Typography>

                        <Stack spacing={1} mt={1}>
                            {features.map((item, index) => (
                                <Stack direction="row" alignItems="center" key={index}>
                                    {/* <CheckCircleIcon sx={{ color: "#5e0bd3", fontSize: 20, mr: 2 }} />
                   */}
                                    <Box sx={{ mr: 2 }}>

                                        <Image
                                            src='/price/tick.png'
                                            alt='tick'
                                            width={20}
                                            height={20}
                                            style={{ objectFit: "contain" }}
                                            className="brand-img"
                                        />
                                    </Box>
                                    <Typography variant="body2">{item}</Typography>
                                </Stack>
                            ))}
                        </Stack>
                        <Box textAlign="center" mt="auto">
                            <Divider sx={{ mb:2, mt:2}} />
                            <Button variant="contained" fullWidth sx={{ bgcolor: '#0d5fe5', fontWeight: 700, py: 1.5, borderRadius: 4 }}>
                                Know more
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>


        </>
    );
};

const PricingCards1 = () => {
    return (
        <Box sx={{ p: 3, ml: "12%", mb: 10, }}>
            <Grid container spacing={3}>

                {/* Endpoint Security */}
                <Grid sx={{ display: "flex", }}>
                    <PlanCard
                        title="Endpoint Security"
                        planType="monthly plan"
                        price="$1"
                        priceNote="per device"
                        image="/price/endpoint.png"
                        features={[
                            "Inventory Management",
                            "Compliance Management",
                            "Vulnerability Management",
                            "Endpoint Protection (EDR/XDR)",
                            "Identity Security",
                            "Incident Response (IR) Management",
                            "Integrations (SIEM, M365, Cloud)",
                            "Analytics & Trends",
                            "Threat Management",
                            "Threat Hunting",
                            "Data Protection",
                            "Patch Management",
                        ]}
                    />
                </Grid>

                {/* Cloud Security */}
                <Grid sx={{ display: "flex" }}>
                    <PlanCard
                        title="Cloud Security"
                        planType="monthly plan"
                        price="$1"
                        priceNote="per device"
                        image="/price/cloud.png"
                        features={[
                            "Cloud Inventory Management",
                            "Cloud Threat Detection",
                            "Cloud Identity & Access Monitoring",
                            "Cloud Data Protection",
                            "Cloud Incident Response(IR)",
                            "Cloud Analytics & Reporting",
                            "Cloud Compliance Management",
                            "Cloud Network Management",
                            "CYB-Assure (Managed SOC Service)",
                        ]}
                    />
                </Grid>

                {/* Smart SOC */}
                <Grid sx={{ display: "flex" }}>
                    <PlanCard
                        title="Smart SOC"
                        planType="monthly plan"
                        price="$499.99"
                        priceNote=""
                        image="/price/soc.png"
                        features={[
                            "Smart SOC Prioritizer",
                            "Collaboration Hub",
                            "Threat Intelligence Integration",
                            "Alert Correlation & Prioritization",
                            "SOC Analytics & Reporting",
                            "SOC Skill Augmentation",
                        ]}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default PricingCards1;
