import React, { useState, useEffect } from "react";
import axios from "axios";

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
  const [cardStats, setCardStats] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getCardStats = () => {
    axios
      .post("https://localhost:5001/service/best-selling-product")
      .then((response) => {
        const stats = response.data;
        setCardStats(stats);
      });
  };

  useEffect(() => getCardStats(), []);

  console.log(cardStats);

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
                  title={cardStats.product_Name}
                  amount={cardStats.sales_Amount}
                  icon={InsertChartOutlined}
                  color="bgError"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={cardStats.is_Progress ? theme.palette.success.main : theme.palette.error.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={cardStats.is_Progress ? ArrowUpward : ArrowDownward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        {cardStats.percentage == 0 ? "N/A%" : cardStats.percentage + "%"}
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
                  title="Samsung"
                  amount="21"
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
                  title="All products"
                  amount="218"
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
