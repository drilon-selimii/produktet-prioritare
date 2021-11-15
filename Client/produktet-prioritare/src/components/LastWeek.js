import React, { useState, useEffect } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";

import componentStyles from "../assets/theme/components/tables.js";

const useStyles = makeStyles(componentStyles);

const LastWeek = () => {
  const classes = useStyles();
  const [repo, setRepo] = useState([]);

  const getRepo = () => {
    axios.post(
      "https://localhost:5001/computation/save-last-week-priority-products"
    );
    axios
      .post("https://localhost:5001/service/get-sorted-last-week")
      .then((response) => {
        const myRepo = response.data;
        setRepo(myRepo);
      });
  };

  useEffect(() => getRepo(), []);

  return (
    <>
      <Container
        maxWidth={true}
        component={Box}
        classes={{ root: classes.containerRoot }}
      >
        <Card classes={{ root: classes.cardRoot }}>
          <CardHeader
            className={classes.cardHeader}
            title="Sorted priority products based on last week sales"
            titleTypographyProps={{
              component: Box,
              marginBottom: "0!important",
              variant: "h4",
            }}
          ></CardHeader>
          <TableContainer>
            <Box
              component={Table}
              alignItems="center"
              marginBottom="0!important"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    No.
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    Product Name
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    Product Id
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    Last Update
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    Price
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    Remaining Quantity
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    Sales Amount
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  >
                    Coefficient
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {repo.map((data, key) => {
                  return (
                    <TableRow key={key}>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        {key + 1}
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        {data.product_Name}
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        {data.product_Id}
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        {data.last_Update}
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        {data.product_Price} €
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        {data.remaining_Quantity}
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        {data.sales_Amount}
                      </TableCell>
                      <TableCell classes={{ root: classes.tableCellRoot }}>
                        {data.coefficient}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Box>
          </TableContainer>
        </Card>
      </Container>
    </>
  );
};

export default LastWeek;
