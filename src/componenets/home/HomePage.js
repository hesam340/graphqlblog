import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Blog from "../blog/Blog";
import Authors from "../authors/Authors";

function HomePage() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2} padding={3}>
          <Grid item xs={12} md={3} mt={4}>
            <Typography component="h3" variant="h5" fontWeight="400" mb={3}>
              نویسنده ها
            </Typography>
            <Authors />
          </Grid>
          <Grid item xs={12} md={9} mt={4}>
            <Typography component="h3" variant="h5" fontWeight="400" mb={3}>
              مقالات
            </Typography>
            <Blog />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
