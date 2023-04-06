import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ds from "../p-images/ds-logo.png";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        mt: 5,
        paddingTop: "1rem",
        paddingBottom: "1rem",
        borderTop: "1px solid #c5c6c7"
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              <img src={ds} alt="logo" title="DigiSoul" className="logo-main" />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              color="textSecondary"
              textAlign="center"
              variant="subtitle1"
            >
              DigiSoul: A Tech World
            </Typography>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | Blogs | Events | Products | Reviews | Trends | More`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
