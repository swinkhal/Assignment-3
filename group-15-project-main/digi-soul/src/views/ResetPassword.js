// Author: Guru Kiran(gkiran@dal.ca)

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function ResetPassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: {
      value: "",
      isError: false,
      errorMessage: "Incorrect email format",
    },
    otp: {
      value: "",
      isError: false,
      errorMessage: "Incorrect OTP",
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
    var regexPassword = /(?=.{8,})./;
    var regexEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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

    // TODO: OTP validation
    if (formData.otp.value === "") {
      isValidationSuccess = false;
      setFormData((prevFormData) => ({
        ...prevFormData,
        otp: {
          ...formData.otp,
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
      console.log(formData.password.value);
      console.log(formData.confirmPassword.value);
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

    if (
      validate() &&
      formData.email.isError &&
      formData.password.isError === false &&
      formData.otp.isError === false
    ) {
      navigate("/login");
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
            <LockResetOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Forgot Password?
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
                  required
                  fullWidth
                  name="Registered Email"
                  value={formData.password.value}
                  onChange={handleChange}
                  label="Registered Email"
                  id="email"
                  helperText={
                    formData.email.isError && formData.email.errorMessage
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="otp"
                  label="Enter OTP"
                  name="otp"
                  value={formData.otp.value}
                  onChange={handleChange}
                  helperText={formData.otp.isError && formData.otp.errorMessage}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  value={formData.password.value}
                  onChange={handleChange}
                  label="New Password"
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
              Change Password
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
