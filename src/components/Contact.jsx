import emailjs from "@emailjs/browser";
import {
  Button,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { theme } from "../theme/theme";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import "../App.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const handleClick = (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_EMAILJS_SERVICE)
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Juliana",
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert(
            "Thank you for your message. I will get back to you as soon as possible."
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (e) => {
          console.log(e);
          alert("Please try again.");
        }
      );
  };

  return (
    <Grid
      container
      p={{ xs: 8, md: 20 }}
      sx={{ height: "70vh" }}
      className={inView ? "section" : "opacity-0"}
      ref={ref}
    >
      {inView ? (
        <ThemeProvider theme={theme}>
          <Grid
            container
            xs={12}
            sx={{ display: "flex", alignSelf: "flex-start" }}
          >
            <Typography variant="h4">
              <TypeAnimation
                sequence={["", 2000, "Get in touch", 2000]}
                cursor={false}
              />
            </Typography>
          </Grid>
          <Grid
            xs={12}
            container
            className={`container ${inView ? "slide-in" : ""}`}
          >
            <Grid item xs={12} md={8} container>
              <Grid item xs={12} container spacing={4}>
                <Grid item xs={6}>
                  <TextField
                    label="Name"
                    variant="standard"
                    fullWidth
                    value={form.name}
                    onChange={(event) =>
                      setForm({ ...form, name: event.target.value })
                    }
                    sx={{
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "white",
                      },
                    }}
                  ></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Email"
                    variant="standard"
                    fullWidth
                    value={form.email}
                    onChange={(event) =>
                      setForm({ ...form, email: event.target.value })
                    }
                    sx={{
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "white",
                      },
                    }}
                  ></TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    variant="standard"
                    fullWidth
                    value={form.message}
                    onChange={(event) =>
                      setForm({ ...form, message: event.target.value })
                    }
                    sx={{
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "white",
                      },
                    }}
                  ></TextField>
                </Grid>

                <Grid item>
                  <Button variant="contained" onClick={handleClick}>
                    Send
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              Grid
              item
              xs={12}
              md={4}
              alignSelf="center"
              mb={5}
              pl={{ xs: 3, md: 20 }}
            >
              <Typography variant="body1" fontWeight="bold">Juliana Mochizuki</Typography>
              <Typography variant="body1">Full-Stack Web Developer</Typography>
              <Typography variant="body1" fontWeight="bold">Email</Typography>
              <Typography variant="body1">jkmochizuki@gmail.com</Typography>
            </Grid>
          </Grid>
        </ThemeProvider>
      ) : null}
    </Grid>
  );
}
