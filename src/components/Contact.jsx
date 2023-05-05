import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Grid,
  Snackbar,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import { theme } from "../theme/theme";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import { contactStyles } from "../theme/styles";

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
    const fields = ["name", "email", "message"];

    fields.forEach((field) => {
      if (form[field].length > 0 && errorMessage[field]) {
        setErrorMessage((prev) => ({ ...prev, [field]: "" }));
        setError((prev) => ({ ...prev, [field]: false }));
      }
    });
  }, [form, errorMessage]);

  const handleClick = (e) => {
    e.preventDefault();

    const fields = ["name", "email", "message"];

    fields.forEach((field) => {
      if (!form[field]) {
        setErrorMessage((prev) => ({
          ...prev,
          [field]: `Please fill out this field.`,
        }));
        setError((prev) => ({ ...prev, [field]: true }));
      }
    });

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
      sx={contactStyles.root}
      className={inView ? "section" : "opacity-0"}
      ref={ref}
      id="contact"
    >
      {inView ? (
        <ThemeProvider theme={theme}>
          {/* title */}
          <Grid container xs={12} sx={contactStyles.formTitle}>
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
            {/* form */}
            <Grid
              item
              xs={12}
              md={8}
              container
              component="form"
              spacing={2}
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
                  sx={contactStyles.formContainer}
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
                  sx={contactStyles.formContainer}
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
                  sx={contactStyles.formContainer}
                  inputProps={{ maxLength: 250 }}
                />
                <Grid xs={1} mt={5}>
                  <Button
                    variant="contained"
                    sx={contactStyles.sendButton}
                    onClick={handleClick}
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            {/* name and email */}
            <Grid item xs={12} md={4} sx={contactStyles.infoContainer}>
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

          {/* message sent confirmation */}
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
        </ThemeProvider>
      ) : null}
    </Grid>
  );
}
