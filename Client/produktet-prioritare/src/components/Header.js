import React from "react";

import { makeStyles, Box, Container, Grid, Tabs, Tab, Typography } from "@material-ui/core";
import { ArrowDownward, ArrowUpward, TrendingUp, InsertChartOutlined, PieChart} from "@material-ui/icons";
// core components
import CardStats from "./Cards/CardStats.js";
import componentStyles from "../assets/theme/components/header.js";
import theme from "../assets/theme/theme.js";

const useStyles = makeStyles(componentStyles);

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className={classes.header}>
        <Container
          maxWidth={false}
          component={Box}
          classes={{ root: classes.containerRoot }}
        >
          <div>
            <Grid container>
              <Grid item xl={2} lg={4} xs={12}>
                <CardStats
                  subtitle="Best Selling"
                  title="102"
                  icon={InsertChartOutlined}
                  color="bgError"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.success.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowUpward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        3.48%
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since last month
                      </Box>
                    </>
                  }
                />
              </Grid>
              <Grid item xl={2} lg={4} xs={12}>
                <CardStats
                  subtitle="Newest Product"
                  title="17"
                  icon={PieChart}
                  color="bgWarning"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.error.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowDownward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        3.48%
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since last week
                      </Box>
                    </>
                  }
                />
              </Grid>
              <Grid item xl={2} lg={4} xs={12}>
                <CardStats
                  subtitle="Total Sales"
                  title="218"
                  icon={TrendingUp}
                  color="bgWarningLight"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.warning.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowDownward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        1.10%
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since yesterday
                      </Box>
                    </>
                  }
                />
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
