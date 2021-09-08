import React from "react";
// @material-ui/core components
import {
  Grid,
  TextField,
  Button,
  Container,
  CssBaseline,
  Typography,
} from "@material-ui/core";

const Login = () => {
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative'}}>
          <Typography component="h2" variant="h5">
            Connect to the database...
          </Typography>
          <form>
            <Grid container spacing={8} justify="center">
              <Grid item xs={12}>
                <TextField
                  required
                  id="Host"
                  type="text"
                  placeholder="Host..."
                  label="Host"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} justify="center">
              <Grid item xs={12}>
                <TextField
                  required
                  id="User"
                  type="text"
                  placeholder="User..."
                  label="User"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Password"
                  type="password"
                  placeholder="Password..."
                  label="Password"
                />
                <Grid item xs={12}></Grid>
              </Grid>
              <Grid container spacing={2} justify="center">
                <Grid item xs={12}>
                  <TextField
                    required
                    id="Database"
                    type="text"
                    placeholder="Database..."
                    label="Database"
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Connect
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Login;
