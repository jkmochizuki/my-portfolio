import {
  Grid,
  Card,
  CardMedia,
  Typography,
  CardHeader,
  Box,
  Link,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projects } from "../constants";
import "../styles/project.css";
import { theme } from "../theme/theme";
import { TypeAnimation } from "react-type-animation";
import "../App.css";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

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
    <Grid
      container
      sx={{ height: "100vh", display: "flex", alignContent: "center" }}
      className={inView ? "section" : "opacity-0"}
      ref={ref}
    >
      {inView ? (
        <ThemeProvider theme={theme}>
          <Grid
            xs={12}
            container
            p={5}
            display="flex"
            justifyContent="center"
            marginBottom={5}
            sx={{ height: "80vh" }}
            className={`container ${inView ? "slide-in" : ""}`}
          >
            <Grid item xs={12}>
              <Typography variant="h4" color="primary.main">
                <TypeAnimation sequence={["", 2000, "Projects", 2000]} cursor={false} />
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ProjectSlides />
            </Grid>
          </Grid>
        </ThemeProvider>
      ) : null}
    </Grid>
  );
}
