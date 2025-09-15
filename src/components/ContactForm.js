import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";

export default function ContactForm() {
  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post("http://localhost:5000/api/contact", values);
        alert("Message sent!");
        resetForm();
      } catch (err) {
        alert("Error sending message");
      }
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 2 }}>
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Message"
        name="message"
        multiline
        rows={4}
        value={formik.values.message}
        onChange={formik.handleChange}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained">Send</Button>
    </Box>
  );
}
