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
import { Link } from "@mui/material";
import axios from "axios";

const theme = createTheme();

export default function Login() {
  const [formData, setFormData] = React.useState({
    email: {
      value: "",
      isError: false,
      errorMessage: "Invalid email",
    },
    password: {
      value: "",
      isError: false,
      errorMessage: "Incorrect password",
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

    // TODO: fix password validation
    //if (!regexPassword.test(formData.password.value)) {
    if (formData.password.value === "") {
      isValidationSuccess = false;
      setFormData((prevFormData) => ({
        ...prevFormData,
        password: {
          ...formData.password,
          isError: true,
        },
      }));
    }

    return isValidationSuccess;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const params = {
      email: formData.email.value,
      password: formData.password.value,
    };
    let db_resp;
    await axios
      .post("https://digi-soul.onrender.com/api/user_details/getuser", params)
      .then((resp) => {
        db_resp = resp.data;
        console.log(resp.status, resp.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
    if (
      validate() &&
      formData.password.isError === false &&
      formData.email.isError === false &&
      db_resp.success
    ) {
      localStorage.setItem("login", "true");
      localStorage.setItem("email", formData.email.value);
      window.location.href = "/";
    } else {
      alert("login failed");
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
            Login
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
              <Grid item container columnGap={29}>
                <Link variant="subtitle2" href="/forgotpassword" gutterBottom>
                  Forgot password?
                </Link>
                <Link variant="subtitle2" href="/signup" gutterBottom>
                  Sign up
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              login
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
