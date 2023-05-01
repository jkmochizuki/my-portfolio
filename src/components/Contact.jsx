import emailjs from "@emailjs/browser";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

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
    <Grid container component="form" spacing={2}>
      <Grid item xs={12}>
        <Typography>Get in touch:</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Your Name"
          variant="outlined"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
        ></TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Your Email"
          variant="outlined"
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
        ></TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Your Message"
          variant="outlined"
          value={form.message}
          onChange={(event) =>
            setForm({ ...form, message: event.target.value })
          }
        ></TextField>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleClick}>
          Send
        </Button>
      </Grid>
    </Grid>
  );
}
