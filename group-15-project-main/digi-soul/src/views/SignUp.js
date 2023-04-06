// Author: Guru Kiran(gkiran@dal.ca)

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const theme = createTheme();

export default function SignUp() {
  const [formData, setFormData] = React.useState({
    firstName: {
      value: "",
      isError: false,
      errorMessage: "Only alphabets are allowed",
    },
    lastName: {
      value: "",
      isError: false,
      errorMessage: "Only alphabets are allowed",
    },
    email: {
      value: "",
      isError: false,
      errorMessage: "Invalid email",
    },
    password: {
      value: "",
      isError: false,
      errorMessage: "Minimum length 8 required",
    },
    confirmPassword: {
      value: "",
      isError: false,
      errorMessage: "Passwords do not match",
    },
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: {
        ...formData[event.target.name],
        value: event.target.value,
        isError: false,
      },
    }));
  }

  function validate(event) {
    var isValidationSuccess = true;

    var regexLetters = /^[A-Za-z]+$/;
    var regexEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var regexPassword = /(?=.{8,})./;

    if (!regexLetters.test(formData.firstName.value)) {
      isValidationSuccess = false;
      setFormData((prevFormData) => ({
        ...prevFormData,
        firstName: {
          ...formData.firstName,
          isError: true,
        },
      }));
    }

    if (!regexLetters.test(formData.lastName.value)) {
      isValidationSuccess = false;
      setFormData((prevFormData) => ({
        ...prevFormData,
        lastName: {
          ...formData.lastName,
          isError: true,
        },
      }));
    }

    if (!regexEmail.test(formData.email.value)) {
      isValidationSuccess = false;
      setFormData((prevFormData) => ({
        ...prevFormData,
        email: {
          ...formData.email,
          isError: true,
        },
      }));
    }

    // TODO: fix password validation
    //if (!regexPassword.test(formData.password.value)) {
    if (!regexPassword.test(formData.password.value)) {
      isValidationSuccess = false;
      setFormData((prevFormData) => ({
        ...prevFormData,
        password: {
          ...formData.password,
          isError: true,
        },
      }));
    }

    if (formData.password.value !== formData.confirmPassword.value) {
      console.log(formData.password.value)
      console.log(formData.confirmPassword.value)
      isValidationSuccess = false;
      setFormData((prevFormData) => ({
        ...prevFormData,
        confirmPassword: {
          ...formData.confirmPassword,
          isError: true,
        },
      }));
    }

    return isValidationSuccess;
  }

  function handleSubmit(event) {
    event.preventDefault();
      if (validate() && formData.password.isError === false &&
          formData.confirmPassword.isError === false &&
          formData.firstName.isError === false &&
          formData.lastName.isError === false &&
          formData.email.isError === false){
            const params = {'firstName': formData.firstName.value, 
                            'lastName': formData.lastName.value,
                            'email': formData.email.value,
                            'password': formData.password.value};
            axios.post("https://digi-soul.onrender.com/api/user_details/adduser", params).then((resp) => {
              if (resp.data.success === true){
                window.location.href = "/"
                localStorage.setItem('login', 'true');
              }
              else{
                alert(resp.data.message);
              }
            }).catch((err) => {
              alert(err.response.data.message);
            })
          }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  value={formData.firstName.value}
                  onChange={handleChange}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  helperText={
                    formData.firstName.isError &&
                    formData.firstName.errorMessage
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName.value}
                  onChange={handleChange}
                  helperText={
                    formData.lastName.isError && formData.lastName.errorMessage
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={formData.email.value}
                  onChange={handleChange}
                  helperText={
                    formData.email.isError && formData.email.errorMessage
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  value={formData.password.value}
                  onChange={handleChange}
                  label="Password"
                  type="password"
                  id="password"
                  helperText={
                    formData.password.isError && formData.password.errorMessage
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  value={formData.confirmPassword.value}
                  onChange={handleChange}
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  helperText={
                    formData.confirmPassword.isError &&
                    formData.confirmPassword.errorMessage
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
