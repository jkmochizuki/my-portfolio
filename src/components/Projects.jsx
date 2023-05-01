import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
} from "@mui/material";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Projects() {
  const projects = [
    {
      name: "Codi",
      image: "/images/codi-project.png",
      about:
        "A coding-oriented flashcards app to help developers and students retain languages and frameworks concepts effectively.",
      stack:
        "React, Axios, Nodejs, Express.js , Prisma ORM, PostgreSQL, Auth0, OpenAPI, Material UI.",
    },
    {
      name: "Scheduler",
      image: "/images/scheduler-project.png",
      about:
        "React scheduler application that allows users to book and cancel interviews.",
      stack: "React, Axios, Classnames, Normalize, Storybook.",
    },
    {
      name: "Tweeter",
      image: "/images/tweeter-project.png",
      about: "Tweeter is a simple, single-page Twitter clone.",
      stack: "Express, jQuery, PostgreSQL, Node.",
    },
  ];

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
              >
              </CardMedia>
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
        <Typography variant="h3">Projects</Typography>
      </Grid>
      <Grid item xs={12}>
        <ProjectSlides />
      </Grid>
    </Grid>
  );
}
