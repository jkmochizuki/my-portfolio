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
import "./projects.css";
import { theme } from "../theme/theme";
import { TypeAnimation } from "react-type-animation";
import "../App.css";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
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
          <SwiperSlide>
            <Card
              sx={{
                maxWidth: 600,
                mx: "auto",
                [theme.breakpoints.up("md")]: {
                  boxShadow:
                    "15px 15px 0px 0px #1c1e26, 15px 15px 0px 0.5px #2af0ea",
                },
                borderRadius: 5,
                // border: "0.5px solid #2af0ea"
              }}
            >
              <CardHeader title={p.name} sx={{ bgcolor: "#232733" }} />
              <Box className="card-box">
                <CardMedia
                  component="img"
                  maxHeight="450"
                  image={process.env.PUBLIC_URL + p.image}
                  className="cardMedia"
                />
                <Box
                  className="overlay"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    <Link
                      color="inherit"
                      underline="hover"
                      sx={{ cursor: "pointer" }}
                      onClick={() => window.open(p.live, "_blank")}
                    >
                      Live
                    </Link>
                    {" | "}
                    <Link
                      color="inherit"
                      underline="hover"
                      sx={{ cursor: "pointer" }}
                      onClick={() => window.open(p.repo, "_blank")}
                    >
                      Repo
                    </Link>
                  </Typography>
                  <br />
                  <Typography variant="subtitle2">{p.about}</Typography>
                  <br />
                  <Typography variant="subtitle2">
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
      p={{ xs: 8, md: 20 }}
      sx={{ maxHeight: { xs: "50vh", md: "100vh" } }}
      className={inView ? "section" : "opacity-0"}
      ref={ref}
    >
      {inView ? (
        <ThemeProvider theme={theme}>
          <Grid
            xs={12}
            container
            sx={{ minHeight: "80vh" }}
            className={`container ${inView ? "slide-in" : ""}`}
          >
            <Grid item xs={12}>
              <Typography variant="h4">
                <TypeAnimation
                  sequence={["", 2000, "Projects", 2000]}
                  cursor={false}
                />
              </Typography>
            </Grid>
            <Grid
              container
              xs={12}
              sx={{
                [theme.breakpoints.down("md")]: {
                  minHeight: "80%",
                  display: "flex",
                  alignContent: "space-between",
                  mb: 5,
                },
              }}
            >
              <ProjectSlides />
            </Grid>
          </Grid>
        </ThemeProvider>
      ) : null}
    </Grid>
  );
}
