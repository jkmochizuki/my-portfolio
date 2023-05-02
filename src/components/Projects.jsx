import {
  Grid,
  Card,
  CardMedia,
  Typography,
  CardHeader,
  Box,
  Link,
} from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projects } from "../constants";
import "../styles/project.css";

export default function Projects() {
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
            <Card
              sx={{ maxWidth: 800, mx: "auto", border: 1, borderRadius: 5 }}
            >
              <CardHeader title={p.name} />
              <Box className="card">
                <CardMedia
                  component="img"
                  height="450"
                  image={process.env.PUBLIC_URL + p.image}
                  className="cardMedia"
                />
                <Box className="overlay">
                  <Typography variant="h6" color="#eeeeee">
                    <Link href="#" color="#eeeeee">
                      Live
                    </Link>
                    |
                    <Link href="#" color="#eeeeee">
                      Repo
                    </Link>
                  </Typography>
                  <Typography variant="h6">{p.about}</Typography>
                  <Typography variant="h6">Tech Stack: {p.stack}</Typography>
                </Box>
              </Box>
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
