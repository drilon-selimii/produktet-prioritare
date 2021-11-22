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
  const [bestSelling, setBestSelling] = useState([]);
  const [newestProduct, setNewestProduct] = useState([]);
  const [totalSales, setTotalSales] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getDataStats = () => {
    axios
      .post("https://localhost:5001/service/best-selling-product")
      .then((response) => {
        setBestSelling(response.data);
      });  
      
      axios
      .post("https://localhost:5001/service/newest-product")
      .then((response) => {
        setNewestProduct(response.data);
      });  

      axios
    .post("https://localhost:5001/service/todays-total-sales")
    .then((response) => {
      setTotalSales(response.data);
    });      
  };

  useEffect(() => getDataStats() , []);

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
                  title={bestSelling.product_Name}
                  amount={bestSelling.sales_Amount + " sales"}
                  icon={InsertChartOutlined}
                  color="bgError"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={bestSelling.is_Progress ? theme.palette.success.main : theme.palette.error.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={bestSelling.is_Progress ? ArrowUpward : ArrowDownward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        {bestSelling.percentage == 0 ? "N/A%" : bestSelling.percentage + "%"}
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
                  title={newestProduct.product_Name}
                  amount={newestProduct.sales_Amount + " sales"}
                  icon={PieChart}
                  color="bgWarning"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={newestProduct.is_Progress ? theme.palette.success.main : theme.palette.error.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={newestProduct.is_Progress ? ArrowUpward : ArrowDownward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        {newestProduct.percentage == 0 ? "N/A%" : newestProduct.percentage + "%"}
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
                  amount={totalSales.sales_Amount}
                  icon={TrendingUp}
                  color="bgWarningLight"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={totalSales.is_Progress ? theme.palette.success.main : theme.palette.error.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={totalSales.is_Progress ? ArrowUpward : ArrowDownward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        {totalSales.percentage == 0 ? "N/A%" : totalSales.percentage + "%"}
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Since last week
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
