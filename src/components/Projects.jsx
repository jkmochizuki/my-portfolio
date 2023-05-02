import {
  Grid,
  Card,
  CardMedia,
  Typography,
  CardHeader,
  CardActionArea,
  Box,
  Link,
} from "@mui/material";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projects } from "../constants";
import { projectStyles } from "../styles/projectStyles";

export default function Projects() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const ProjectSlides = () => {
    return (
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {projects.map((p) => (
          <SwiperSlide>
            <Card sx={{ maxWidth: 800, mx: "auto", border: 1 }}>
              <CardActionArea
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <CardHeader title={p.name} />
                {!isHovered ? (
                  <CardMedia
                    component="img"
                    height="450"
                    image={process.env.PUBLIC_URL + p.image}
                  />
                ) : (
                  <>
                    <CardMedia
                      component="img"
                      height="450"
                      image={process.env.PUBLIC_URL + p.image}
                      style={projectStyles.media}
                    />
                    <Box style={projectStyles.overlay}>
                      <Typography variant="h6" color="text.primary">
                        <Link href="#">Live</Link> | <Link href="#">Repo</Link>
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        {p.about}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        Tech Stack: {p.stack}
                      </Typography>
                    </Box>
                  </>
                )}
              </CardActionArea>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid xs={12} container p={5} marginBottom={5} sx={{ height: "95vh" }}>
        <Grid item xs={12}>
          <Typography variant="h4">Projects</Typography>
        </Grid>
        <Grid item xs={12}>
          <ProjectSlides />
        </Grid>
      </Grid>
    </Grid>
  );
}
