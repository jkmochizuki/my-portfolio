import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
} from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projects } from "../constants";

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
            <Card sx={{ maxWidth: 800, mx: "auto", border: 1 }}>
              <CardHeader title={p.name} />
              <CardMedia
                component="img"
                height="450"
                image={process.env.PUBLIC_URL + p.image}
              ></CardMedia>
              <CardContent sx={{ mx: "auto" }}>
                <Typography variant="body2" color="text.secondary">
                  {p.about}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tech Stack: {p.stack}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  return (
    <Grid container sx={{ height: "100vh" }} columns={{ xs: 12 }}>
      <Grid item xs={12}>
        <Typography variant="h4">Projects</Typography>
      </Grid>
      <Grid item xs={12}>
        <ProjectSlides />
      </Grid>
    </Grid>
  );
}
