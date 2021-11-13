import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { makeStyles, Box, Tabs, Tab, Typography } from "@material-ui/core";
import Header from "../components/Header";
import LastWeek from "../components/LastWeek";
import LastMonth from "../components/LastMonth";
import LeastSold from "../components/LeastSold";

import componentStyles from "../assets/theme/components/header.js";

const useStyles = makeStyles(componentStyles);

const Home = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <div>  
    <Router>      
    <Box className={classes.tabmenu}>
        <Typography className={classes.typography}>
          Sorted Priority Products based on:
        </Typography>
        <Tabs value={value} onChange={handleChange} >
          <Tab className={classes.tabs} value="one" label="Last Week Sales" component={Link} to="/"/>
          <Tab className={classes.tabs} value="two" label="Last Month Sales" component={Link} to="/lastmonth"/>
          <Tab className={classes.tabs} value="three" label="Least Sold Products" component={Link} to="/LeastSold"/>
        </Tabs>
      </Box>
      <Header/>
        <div>
          <Route path="/" exact component={LastWeek} />
          <Route path="/lastmonth" exact component={LastMonth} />
          <Route path="/leastsold" exact component={LeastSold} />
        </div>
      </Router>
    </div>
  );
};
export default Home;
