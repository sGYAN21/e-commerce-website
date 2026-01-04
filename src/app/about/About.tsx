"use client";

import {
    Box,
    Typography,
    Container,
    Grid,
    Avatar,
    Button,
    useTheme,
    useMediaQuery,
} from "@mui/material";

const leadershipTeam = [
    { name: "Oliver Queen", role: "CEO", img: "/leaders/oliver.jpg" },
    { name: "Felicity Smoak", role: "Developer", img: "/leaders/felicity.jpg" },
    { name: "John Diggle", role: "Director", img: "/leaders/john.jpg" },
    { name: "Laurel Lance", role: "Attorney ", img: "/leaders/laurel.jpg" },
    { name: "Tommy Marlyn", role: "Business Analyst", img: "/leaders/tommy.jpg" },
    { name: "Barry Allen", role: "Manager", img: "/leaders/barry.jpg" },
    { name: "Thea Queen", role: "Tester", img: "/leaders/thea.jpg" },
];

export default function AboutPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box sx={{ bgcolor: "#fff", pb: 10 }}>
            {/* ======= HEADER SECTION ======= */}
            <Box sx={{ textAlign: "center", py: 8, bgcolor: "#f8f9fa", mt: 5 }}>
                <Container maxWidth="md">
                    <Typography variant="h3" fontWeight={700} gutterBottom>
                        About Us
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Driven by passion, guided by purpose — we create solutions that inspire and empower.
                    </Typography>
                </Container>
            </Box>

            {/* ======= INTRO SECTION ======= */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid >
                        <Typography variant="h4" fontWeight={700} lineHeight={1.3}>
                            You guessed it. We’re changing the game.
                        </Typography>
                    </Grid>
                    <Grid

                        sx={{
                            borderLeft: isMobile ? "none" : "1px solid #ddd",
                            pl: { md: 6 },
                            pt: { xs: 2, md: 0 }
                        }}
                    >
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                            We’re not just building products — we’re shaping possibilities. At the heart of our journey is a commitment to innovation, integrity, and impact. Our team brings together bold thinkers and passionate creators who believe in challenging the status quo and delivering meaningful solutions. From leadership to execution, we’re united by a shared vision: to empower people and transform industries through purposeful design and technology.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

            {/* ======= LEADERSHIP TEAM ======= */}
            <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
                <Typography variant="h4" fontWeight={700} mb={2}>
                    Our Leadership Team
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: "auto", mb: 8 }}>
                    Our team of creators and visionaries thrives on solving real-world problems with fresh ideas and bold technology.
                    We don’t follow trends — we create them. With fearless innovation and human-centered design, we build experiences that truly matter.
                </Typography>

                <Grid container spacing={10} justifyContent="center">
                    {leadershipTeam.map((member, index) => (
                        <Grid key={index}>
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <Avatar
                                    src={member.img}
                                    sx={{
                                        width: 180,
                                        height: 180,
                                        mb: 3,
                                        boxShadow: "0px 10px 20px rgba(0,0,0,0.1)"
                                    }}
                                />
                                <Typography variant="h6" fontWeight={700}>
                                    {member.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {member.role}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* ======= JOIN TEAM CTA ======= */}
            <Container maxWidth="lg" sx={{ mt: 10 }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        bgcolor: "#f8f9fa",
                        borderRadius: 4,
                        overflow: "hidden",
                        minHeight: 400,
                    }}
                >
                    {/* TEXT BOX - Reduced to flex: 0.8 (Takes ~40% width) */}
                    <Box
                        sx={{
                            flex: 0.8,
                            p: { xs: 4, md: 8 },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center"
                        }}
                    >
                        <Typography variant="h4" fontWeight={700} mb={3}>
                            Join a global team of change-makers.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" mb={4}>
                            Living with potential, strengthened by powerful support and guided by timely growth.
                            Elite pathways are built with purpose, never by chance.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: "#003060",
                                width: "fit-content",
                                px: 4,
                                py: 1.5,
                                borderRadius: 2,
                                textTransform: "none",
                                fontWeight: 600,
                                "&:hover": { bgcolor: "#001f3f" }
                            }}
                        >
                            View Job Openings
                        </Button>
                    </Box>

                    {/* IMAGE BOX - Increased to flex: 1.2 (Takes ~60% width) */}
                    <Box
                        sx={{
                            flex: 1.2, // This makes the image box wider than the text box
                            borderRadius: { xs: '0', md: '20px' }, // Optional: remove radius on mobile stack
                            margin: { md: 2 }, // Optional: adds a little padding around the image box
                            border: '2px solid #ccc',
                            backgroundImage: "url('/leaders/global.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            minHeight: { xs: 300, md: "auto" }
                        }}
                    />
                </Box>
            </Container>
        </Box>
    );
}