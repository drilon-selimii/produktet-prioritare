import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles, Box, Tabs, Tab } from "@material-ui/core";
import componentStyles from "../assets/theme/components/auth-forms";
import Login from "./Login";
import Connect from "./Connect";

const Auth = () => {
  const classes = componentStyles();
  
  const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <div>
      <Router>
        <Box className={classes.tabmenu}>
          <Tabs value={value} onChange={handleChange}>
            <Tab
              className={classes.tabs}
              value="one"
              label="Login"
              component={Link}
              to="/"
            />
            <Tab
              className={classes.tabs}
              value="two"
              label="Connect"
              component={Link}
              to="/connect"
            />
          </Tabs>
        </Box>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/connect" exact component={Connect} />
        </div>
      </Router>
    </div>
  );
};

export default Auth;
