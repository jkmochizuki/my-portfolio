import emailjs from "@emailjs/browser";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ok1pns2",
        "template_8dobv7a",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Juliana",
        },
        "zy4iNUTiZAtTGbQxf"
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
    <Grid container sx={{ height: "70vh", bgcolor: "darkgrey" }} >
      <Grid
        xs={7}
        container
        component="form"
        marginLeft={5}
        p={5}
      >
        <Grid item>
          <Typography variant="h4">Get in touch</Typography>
        </Grid>
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
            ></TextField>
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleClick}>
            Send
          </Button>
        </Grid>
      </Grid>
      <Grid
        xs={4}
        container
        marginRight={5}
        marginLeft={5}
        padding={5}
      >
        <Grid item xs={12}>
          <Typography variant="h4">Follow</Typography>
        </Grid>
        <Grid item xs={12} justifyContent="center" container>
          <LinkedInIcon fontSize="large" />
          <GitHubIcon fontSize="large" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Juliana Mochizuki</Typography>
          <Typography variant="h6">Full-Stack Web Developer</Typography>
          <Typography variant="h5">Email</Typography>
          <Typography variant="h6">jkmochizuki@gmail.com</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
