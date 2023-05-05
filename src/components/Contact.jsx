import emailjs from "@emailjs/browser";
import {
  Alert,
  Button,
  Grid,
  Snackbar,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { theme } from "../theme/theme";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import "../App.css";

export default function Contact() {
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({
    name: false,
    email: false,
    message: false,
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (form.name.length > 0 && errorMessage.name) {
      setErrorMessage((prev) => ({ ...prev, name: "" }));
      setError((prev) => ({ ...prev, name: false }));
    }
    if (form.email.length > 0 && errorMessage.email) {
      setErrorMessage((prev) => ({ ...prev, email: "" }));
      setError((prev) => ({ ...prev, email: false }));
    }
    if (form.message.length > 0 && errorMessage.message) {
      setErrorMessage((prev) => ({ ...prev, message: "" }));
      setError((prev) => ({ ...prev, message: false }));
    }
  }, [form]);

  const handleClick = (e) => {
    e.preventDefault();

    if (!form.name) {
      setErrorMessage((prev) => ({
        ...prev,
        name: "Please fill out this field.",
      }));
      setError((prev) => ({ ...prev, name: true }));
    } else if (!form.email) {
      setErrorMessage((prev) => ({
        ...prev,
        email: "Please fill out this field.",
      }));
      setError((prev) => ({ ...prev, email: true }));
    } else {
      if (!form.message) {
        setErrorMessage((prev) => ({
          ...prev,
          message: "Please fill out this field.",
        }));
        setError((prev) => ({ ...prev, message: true }));
      }
    }
    if (form.name && form.email && form.message) {
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
            setMessage(
              "Thank you for your message! I will get back to you as soon as possible."
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
    }
  };

  return (
    <Grid
      container
      p={{ xs: 8, md: 15 }}
      sx={{ height: "90vh" }}
      className={inView ? "section" : "opacity-0"}
      ref={ref}
      id="contact"
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
              <Grid
                item
                xs={12}
                container
                spacing={4}
                component="form"
                validate
              >
                <Grid item xs={6}>
                  <TextField
                    label="Name"
                    error={error.name}
                    helperText={errorMessage.name}
                    variant="standard"
                    fullWidth
                    value={form.name}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, name: event.target.value }))
                    }
                    sx={{
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "white",
                      },
                    }}
                    inputProps={{ maxLength: 50 }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Email"
                    error={error.email}
                    helperText={errorMessage.email}
                    variant="standard"
                    fullWidth
                    value={form.email}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        email: event.target.value,
                      }))
                    }
                    sx={{
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "white",
                      },
                    }}
                    inputProps={{ maxLength: 50 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    error={error.message}
                    helperText={errorMessage.message}
                    variant="standard"
                    fullWidth
                    value={form.message}
                    multiline
                    rows={4}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        message: event.target.value,
                      }))
                    }
                    sx={{
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "white",
                      },
                    }}
                    inputProps={{ maxLength: 250 }}
                  />
                </Grid>

                <Grid item>
                  <Button
                    variant="contained"
                    sx={{ borderRadius: 2, fontSize: { xs: 10, md: 15 } }}
                    onClick={handleClick}
                  >
                    Send
                  </Button>
                  <Snackbar
                    open={message}
                    autoHideDuration={6000}
                    onClose={() => setMessage("")}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                  >
                    <Alert
                      elevation={6}
                      variant="filled"
                      onClose={() => setMessage("")}
                      severity="success"
                    >
                      {message}
                    </Alert>
                  </Snackbar>
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
              <Typography variant="body1" fontWeight="bold">
                Juliana Mochizuki
              </Typography>
              <Typography variant="body1">Full-Stack Web Developer</Typography>
              <Typography variant="body1" fontWeight="bold">
                Email
              </Typography>
              <Typography variant="body1">jkmochizuki@gmail.com</Typography>
            </Grid>
          </Grid>
        </ThemeProvider>
      ) : null}
    </Grid>
  );
}
