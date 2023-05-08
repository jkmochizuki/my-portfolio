import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  CardHeader,
  Box,
  Link,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import { projects } from "../constants";
import { theme } from "../theme/theme";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../App.css";
import { projectsStyles } from "../theme/styles";

export default function Projects() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: isSmallScreen ? null : 0.25,
  });

  const ProjectSlides = () => {
    return (
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {projects.map((p) => (
          <SwiperSlide key={p.name}>
            <Card sx={projectsStyles.card}>
              <CardHeader title={p.name} sx={projectsStyles.cardHeader} />
              <Box className="card-box">
                <CardMedia
                  component="img"
                  sx={projectsStyles.CardMedia}
                  image={process.env.PUBLIC_URL + p.image}
                  className="cardMedia"
                />
                <Box className="overlay" sx={projectsStyles.cardBox}>
                  <Typography variant="body1" color="white">
                    {p.name !== "Tweeter" && (
                      <span>
                        <Link
                          color="inherit"
                          underline="hover"
                          sx={projectsStyles.link}
                          onClick={() => window.open(p.live, "_blank")}
                        >
                          Live
                        </Link>
                        {" | "}
                      </span>
                    )}
                    <Link
                      color="inherit"
                      underline="hover"
                      sx={projectsStyles.link}
                      onClick={() => window.open(p.repo, "_blank")}
                    >
                      Repo
                    </Link>
                  </Typography>
                  <br />
                  <Typography variant="h6">{p.about}</Typography>
                  <br />
                  <Typography variant="h6">
                    Tech Stack: {p.stack}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  return (
    <Grid
      container
      sx={projectsStyles.root}
      className={!isSmallScreen && inView ? "section" : "opacity-0"}
      ref={ref}
      id="projects"
    >
      {inView ? (
        <ThemeProvider theme={theme}>
          <Grid
            container
            sx={projectsStyles.container}
            className={`container ${
              !isSmallScreen && inView ? "slide-in" : ""
            }`}
          >
            {/* title */}
            <Grid item xs={12} sx={projectsStyles.title}>
              <Typography variant="h4">
                <TypeAnimation
                  sequence={
                    isSmallScreen
                      ? ["Projects", 2000]
                      : ["", 2000, "Projects", 2000]
                  }
                  cursor={false}
                />
              </Typography>
            </Grid>

            {/* project slides */}
            <Grid item xs={12}>
              <ProjectSlides />
            </Grid>
          </Grid>
        </ThemeProvider>
      ) : null}
    </Grid>
  );
}
