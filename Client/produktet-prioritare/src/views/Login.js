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
import componentStyles from "../assets/theme/components/auth-forms";

const Login = () => {
  const classes = componentStyles();

  return (
    <div className={classes.backg}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div className={classes.main}>
          <Typography component="h2" variant="h5">
            Connect to the database...
          </Typography>
          <form className={classes.form}>
            <Grid container spacing={2} justify="center">
              <Grid item sm={12}>
                <TextField
                  required
                  fullWidth
                  id="User"
                  type="text"
                  placeholder="User..."
                  label="User"
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  required
                  fullWidth
                  id="Password"
                  type="password"
                  placeholder="Password..."
                  label="Password"
                />
              </Grid>
              <Grid item sm={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submitStyle + " " + classes.buttons}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
