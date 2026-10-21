import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";


const techStacks = [
    // Frontend
    {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
        name: "CSS3",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
        name: "Tailwind CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },

    // Backend & APIs
    {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
        name: "FastAPI",
        logo: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
    },
    {
        name: "JWT",
        logo: "https://jwt.io/img/pic_logo.svg",
    },
    {
        name: "Socket.IO",
        logo: "https://socket.io/images/logo.svg",
    },

    // Database & Caching
    {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
        name: "Redis",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    },

    // Tools & Platforms
    {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
        name: "GitHub",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
        name: "VS Code",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
        name: "Postman",
        logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },
    {
        name: "Vercel",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    },
    {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },

    // Integrations
    {
        name: "Razorpay",
        logo: "https://cdn.simpleicons.org/razorpay/0C2451",
    },
];


export default function TechStack() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % techStacks.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            sx={{
                py: 8,
                background: "linear-gradient(180deg, #ffffff 0%, #f3e8ff 100%)",
            }}
        >
            <Typography
                variant="h4"
                align="center"
                sx={{ fontWeight: "bold", color: "#7e22ce", mb: 6 }}
            >
                My Tech Stack
            </Typography>

            <Grid container spacing={4} justifyContent="center" sx={{
                maxWidth: "90%",   
                margin: "0 auto", 
            }}>
                {techStacks.map((tech, i) => (
                    <Grid key={tech.name} size={{ xs: 12, sm: 6, md: 3 }}>
                        <Paper
                            elevation={4}
                            sx={{
                                p: 3,
                                textAlign: "center",
                                borderRadius: "20px",
                                bgcolor: i === index ? "#b794f4" : "white",
                                color: i === index ? "white" : "black",
                                transition: "all 0.3s ease",
                                transform: i === index ? "scale(1.05)" : "scale(1)",
                                "&:hover": {
                                    bgcolor: "#b794f4",
                                    color: "white",
                                    transform: "scale(1.05)",
                                },
                            }}
                        >
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    marginBottom: "10px",
                                }}
                            />
                            <Typography variant="subtitle1">{tech.name}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
