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
import axios from "axios";
const theme = createTheme();

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [otp, setOTP] = React.useState(0);
  const [ShowBox, setShowBox] = React.useState(false);
  const [HideBox, setHideBox] = React.useState(true);
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

  async function handleSubmit(event) {
    event.preventDefault();

    if (
      validate() &&
      formData.confirmPassword.isError === false &&
      formData.password.isError === false &&
      formData.email.isError === false
    ) {
      // navigate("/login", {
      //   state: formData,
      // });
      const user_params = {'email': formData.email.value}
      let user_found;
      await axios.post("https://digi-soul.onrender.com/api/user_details/finduser", user_params).then((resp) => {
        const status = resp.data.message
        if (status === 'User found'){
          user_found = true;
        }
        else{
          user_found = false
        }
      }).catch((err) => {
        user_found = false
        alert(err.data.message)
      })

      console.log("button clicked");
      const params = { 'email': formData.email.value };
      console.log(params);
      if (user_found) {
        await axios
        .post("https://digi-soul.onrender.com/api/user_details/otp", params)
        .then((resp) => {
          if (resp.data.success) {
            setOTP(resp.data.otp);
            setShowBox(true);
            setHideBox(false);
          } else {
            alert("Couldn't send OTP to the registered email");
          }
        })
        .catch((err) => {
          alert(err.data);
        });
      }
      else{
        alert('Email not found. Please sign-up')
      }
      
    }

  }

  async function handleOTP(event){
    event.preventDefault();

    if (formData.otp.value === "" || parseInt(formData.otp.value) !== otp) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        otp: {
          ...formData.otp,
          isError: true,
        },
      }));
      alert('Invalid OTP')
    }
    else if (parseInt(otp) === otp) {
      const params = {'email': formData.email.value, 'password': formData.password.value}
      await axios.post('https://digi-soul.onrender.com/api/user_details/updateuser', params)
      navigate("/login")
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
            // onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  error={formData.email.isError}
                  required
                  fullWidth
                  id="email"
                  label="Registered Email"
                  name="email"
                  value={formData.email.value}
                  onChange={handleChange}
                  disabled={ShowBox}
                  helperText={
                    formData.email.isError && formData.email.errorMessage
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  error={formData.password.isError}
                  fullWidth
                  disabled={ShowBox}
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
                  error={formData.confirmPassword.isError}
                  disabled={ShowBox}
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

              {ShowBox && (
                <Grid item xs={12}>
                  <TextField
                    error={formData.otp.isError}
                    required
                    fullWidth
                    id="otp"
                    label="Enter OTP"
                    name="otp"
                    value={formData.otp.value}
                    onChange={handleChange}
                    helperText={
                      formData.otp.isError && formData.otp.errorMessage
                    }
                  />
                </Grid>
              )}
            </Grid>
            {HideBox && (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
                onClick={handleSubmit}
              >
                Send OTP
              </Button>
            )}
            {ShowBox && (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3}}
                onClick={handleOTP}
              >
                Change Password
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
