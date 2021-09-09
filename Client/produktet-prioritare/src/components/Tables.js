import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/lab components
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Pagination from "@material-ui/lab/Pagination";
// @material-ui/icons components
import MoreVert from "@material-ui/icons/MoreVert";

// core components
import Header from "./Header.js";

import componentStyles from "../assets/theme/components/tables.js";
import theme from "../assets/theme/theme.js";

const useStyles = makeStyles(componentStyles);

const Tables = () => {
  const classes = useStyles();
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const [anchorEl5, setAnchorEl5] = React.useState(null);
  const handleClick = (event) => {
    switch (event.currentTarget.getAttribute("aria-controls")) {
      case "simple-menu-1":
        setAnchorEl1(event.currentTarget);
        break;
      case "simple-menu-2":
        setAnchorEl2(event.currentTarget);
        break;
      case "simple-menu-3":
        setAnchorEl3(event.currentTarget);
        break;
      case "simple-menu-4":
        setAnchorEl4(event.currentTarget);
        break;
      case "simple-menu-5":
        setAnchorEl5(event.currentTarget);
      default:
    }
  };
  const handleClose = () => {
    setAnchorEl1(null);
    setAnchorEl2(null);
    setAnchorEl3(null);
    setAnchorEl4(null);
    setAnchorEl5(null);
  };
  return (
    <>
      <Header />
      <Container
        maxWidth={true}
        component={Box}
        classes={{ root: classes.containerRoot }}
      >
        <Card classes={{ root: classes.cardRoot }}>
          <CardHeader
            className={classes.cardHeader}
            title="Sorted Products"
            titleTypographyProps={{
              component: Box,
              marginBottom: "0!important",
              variant: "h3",
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
                    Status
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
                    Stock
                  </TableCell>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot + " " + classes.tableCellRootHead,
                    }}
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot +
                        " " +
                        classes.tableCellRootBodyHead,
                    }}
                    component="th"
                    variant="head"
                    scope="row"
                  >
                    <Box alignItems="center" display="flex">
                      <Box
                        component={Avatar}
                        marginRight="1rem"
                        alt="..."                      
                      />
                      <Box display="flex" alignItems="flex-start">
                        <Box fontSize=".875rem" component="span">
                          Argon Design System
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    $2,500 USD
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    <Box paddingTop=".35rem" paddingBottom=".35rem">
                      <Box
                        marginRight="10px"
                        component="i"
                        width=".375rem"
                        height=".375rem"
                        borderRadius="50%"
                        display="inline-block"
                        className={
                          classes.verticalAlignMiddle + " " + classes.bgWarning
                        }
                      ></Box>
                      pending
                    </Box>
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    <AvatarGroup>
                      <Tooltip title="Ryan Tompson" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                        />
                      </Tooltip>
                      <Tooltip title="Romina Hadid" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                        />
                      </Tooltip>
                      <Tooltip title="Alexander Smith" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                        />
                      </Tooltip>
                      <Tooltip title="Jessica Doe" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                        />
                      </Tooltip>
                    </AvatarGroup>
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    <Box display="flex" alignItems="center">
                      <Box component="span" marginRight=".5rem">
                        60%
                      </Box>
                      <Box width="100%">
                        <LinearProgress
                          variant="determinate"
                          value={60}
                          classes={{
                            root: classes.linearProgressRoot,
                            bar: classes.bgGradientError,
                          }}
                        />
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    classes={{ root: classes.tableCellRoot }}
                    align="right"
                  >
                    <Box
                      aria-controls="simple-menu-1"
                      aria-haspopup="true"
                      onClick={handleClick}
                      size="small"
                      component={Button}
                      width="2rem!important"
                      height="2rem!important"
                      minWidth="2rem!important"
                      minHeight="2rem!important"
                    >
                      <Box
                        component={MoreVert}
                        width="1.25rem!important"
                        height="1.25rem!important"
                        position="relative"
                        top="2px"
                        color={theme.palette.gray[500]}
                      />
                    </Box>
                    <Menu
                      id="simple-menu-1"
                      anchorEl={anchorEl1}
                      keepMounted
                      open={Boolean(anchorEl1)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Action</MenuItem>
                      <MenuItem onClick={handleClose}>Another action</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Something else here
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot +
                        " " +
                        classes.tableCellRootBodyHead,
                    }}
                    component="th"
                    variant="head"
                    scope="row"
                  >
                    <Box alignItems="center" display="flex">
                      <Box
                        component={Avatar}
                        marginRight="1rem"
                        alt="..."
                      />
                      <Box display="flex" alignItems="flex-start">
                        <Box fontSize=".875rem" component="span">
                          Angular Now UI Kit PRO
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    $1,800 USD
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    <Box paddingTop=".35rem" paddingBottom=".35rem">
                      <Box
                        marginRight="10px"
                        component="i"
                        width=".375rem"
                        height=".375rem"
                        borderRadius="50%"
                        display="inline-block"
                        className={
                          classes.verticalAlignMiddle + " " + classes.bgSuccess
                        }
                      ></Box>
                      completed
                    </Box>
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    <AvatarGroup>
                      <Tooltip title="Ryan Tompson" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                        />
                      </Tooltip>
                      <Tooltip title="Romina Hadid" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                        />
                      </Tooltip>
                      <Tooltip title="Alexander Smith" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                        />
                      </Tooltip>
                      <Tooltip title="Jessica Doe" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                        />
                      </Tooltip>
                    </AvatarGroup>
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    <Box display="flex" alignItems="center">
                      <Box component="span" marginRight=".5rem">
                        100%
                      </Box>
                      <Box width="100%">
                        <LinearProgress
                          variant="determinate"
                          value={100}
                          classes={{
                            root: classes.linearProgressRoot,
                            bar: classes.bgGradientSuccess,
                          }}
                        />
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    classes={{ root: classes.tableCellRoot }}
                    align="right"
                  >
                    <Box
                      aria-controls="simple-menu-2"
                      aria-haspopup="true"
                      onClick={handleClick}
                      size="small"
                      component={Button}
                      width="2rem!important"
                      height="2rem!important"
                      minWidth="2rem!important"
                      minHeight="2rem!important"
                    >
                      <Box
                        component={MoreVert}
                        width="1.25rem!important"
                        height="1.25rem!important"
                        position="relative"
                        top="2px"
                        color={theme.palette.gray[500]}
                      />
                    </Box>
                    <Menu
                      id="simple-menu-2"
                      anchorEl={anchorEl2}
                      keepMounted
                      open={Boolean(anchorEl2)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Action</MenuItem>
                      <MenuItem onClick={handleClose}>Another action</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Something else here
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot +
                        " " +
                        classes.tableCellRootBodyHead,
                    }}
                    component="th"
                    variant="head"
                    scope="row"
                  >
                    <Box alignItems="center" display="flex">
                      <Box
                        component={Avatar}
                        marginRight="1rem"
                        alt="..."
                      />
                      <Box display="flex" alignItems="flex-start">
                        <Box fontSize=".875rem" component="span">
                          Black Dashboard
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    $3,150 USD
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    <Box paddingTop=".35rem" paddingBottom=".35rem">
                      <Box
                        marginRight="10px"
                        component="i"
                        width=".375rem"
                        height=".375rem"
                        borderRadius="50%"
                        display="inline-block"
                        className={
                          classes.verticalAlignMiddle + " " + classes.bgError
                        }
                      ></Box>
                      delayed
                    </Box>
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    <AvatarGroup>
                      <Tooltip title="Ryan Tompson" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                        />
                      </Tooltip>
                      <Tooltip title="Romina Hadid" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                        />
                      </Tooltip>
                      <Tooltip title="Alexander Smith" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                        />
                      </Tooltip>
                      <Tooltip title="Jessica Doe" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                        />
                      </Tooltip>
                    </AvatarGroup>
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    <Box display="flex" alignItems="center">
                      <Box component="span" marginRight=".5rem">
                        72%
                      </Box>
                      <Box width="100%">
                        <LinearProgress
                          variant="determinate"
                          value={72}
                          classes={{
                            root: classes.linearProgressRoot,
                            bar: classes.bgGradientError,
                          }}
                        />
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    classes={{ root: classes.tableCellRoot }}
                    align="right"
                  >
                    <Box
                      aria-controls="simple-menu-3"
                      aria-haspopup="true"
                      onClick={handleClick}
                      size="small"
                      component={Button}
                      width="2rem!important"
                      height="2rem!important"
                      minWidth="2rem!important"
                      minHeight="2rem!important"
                    >
                      <Box
                        component={MoreVert}
                        width="1.25rem!important"
                        height="1.25rem!important"
                        position="relative"
                        top="2px"
                        color={theme.palette.gray[500]}
                      />
                    </Box>
                    <Menu
                      id="simple-menu-3"
                      anchorEl={anchorEl3}
                      keepMounted
                      open={Boolean(anchorEl3)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Action</MenuItem>
                      <MenuItem onClick={handleClose}>Another action</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Something else here
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot +
                        " " +
                        classes.tableCellRootBodyHead,
                    }}
                    component="th"
                    variant="head"
                    scope="row"
                  >
                    <Box alignItems="center" display="flex">
                      <Box
                        component={Avatar}
                        marginRight="1rem"
                        alt="..."
                      />
                      <Box display="flex" alignItems="flex-start">
                        <Box fontSize=".875rem" component="span">
                          React Material Dashboard
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    $4,400 USD
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    <Box paddingTop=".35rem" paddingBottom=".35rem">
                      <Box
                        marginRight="10px"
                        component="i"
                        width=".375rem"
                        height=".375rem"
                        borderRadius="50%"
                        display="inline-block"
                        className={
                          classes.verticalAlignMiddle + " " + classes.bgInfo
                        }
                      ></Box>
                      on schedule
                    </Box>
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    <AvatarGroup>
                      <Tooltip title="Ryan Tompson" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                        />
                      </Tooltip>
                      <Tooltip title="Romina Hadid" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                        />
                      </Tooltip>
                      <Tooltip title="Alexander Smith" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                        />
                      </Tooltip>
                      <Tooltip title="Jessica Doe" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                        />
                      </Tooltip>
                    </AvatarGroup>
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    <Box display="flex" alignItems="center">
                      <Box component="span" marginRight=".5rem">
                        90%
                      </Box>
                      <Box width="100%">
                        <LinearProgress
                          variant="determinate"
                          value={90}
                          classes={{
                            root: classes.linearProgressRoot,
                            bar: classes.bgGradientInfo,
                          }}
                        />
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    classes={{ root: classes.tableCellRoot }}
                    align="right"
                  >
                    <Box
                      aria-controls="simple-menu-4"
                      aria-haspopup="true"
                      onClick={handleClick}
                      size="small"
                      component={Button}
                      width="2rem!important"
                      height="2rem!important"
                      minWidth="2rem!important"
                      minHeight="2rem!important"
                    >
                      <Box
                        component={MoreVert}
                        width="1.25rem!important"
                        height="1.25rem!important"
                        position="relative"
                        top="2px"
                        color={theme.palette.gray[500]}
                      />
                    </Box>
                    <Menu
                      id="simple-menu-4"
                      anchorEl={anchorEl4}
                      keepMounted
                      open={Boolean(anchorEl4)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Action</MenuItem>
                      <MenuItem onClick={handleClose}>Another action</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Something else here
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    classes={{
                      root:
                        classes.tableCellRoot +
                        " " +
                        classes.tableCellRootBodyHead,
                    }}
                    component="th"
                    variant="head"
                    scope="row"
                  >
                    <Box alignItems="center" display="flex">
                      <Box
                        component={Avatar}
                        marginRight="1rem"
                        alt="..."
                      />
                      <Box display="flex" alignItems="flex-start">
                        <Box fontSize=".875rem" component="span">
                          Vue Paper UI Kit PRO
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    classes={{
                      root: classes.tableCellRoot,
                    }}
                  >
                    $2,200 USD
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    <Box paddingTop=".35rem" paddingBottom=".35rem">
                      <Box
                        marginRight="10px"
                        component="i"
                        width=".375rem"
                        height=".375rem"
                        borderRadius="50%"
                        display="inline-block"
                        className={
                          classes.verticalAlignMiddle + " " + classes.bgSuccess
                        }
                      ></Box>
                      completed
                    </Box>
                  </TableCell>
                  <TableCell classes={{ root: classes.tableCellRoot }}>
                    <AvatarGroup>
                      <Tooltip title="Ryan Tompson" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                        />
                      </Tooltip>
                      <Tooltip title="Romina Hadid" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                        />
                      </Tooltip>
                      <Tooltip title="Alexander Smith" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                        />
                      </Tooltip>
                      <Tooltip title="Jessica Doe" placement="top">
                        <Avatar
                          classes={{ root: classes.avatarRoot }}
                          alt="..."
                        />
                      </Tooltip>
                    </AvatarGroup>
                  </TableCell>
                  <TableCell
                    classes={{
                      root: classes.tableCellRoot,
                    }}
                  >
                    <Box display="flex" alignItems="center">
                      <Box component="span" marginRight=".5rem">
                        100%
                      </Box>
                      <Box width="100%">
                        <LinearProgress
                          variant="determinate"
                          value={100}
                          classes={{
                            root: classes.linearProgressRoot,
                            bar: classes.bgGradientSuccess,
                          }}
                        />
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell
                    classes={{ root: classes.tableCellRoot }}
                    align="right"
                  >
                    <Box
                      aria-controls="simple-menu-5"
                      aria-haspopup="true"
                      onClick={handleClick}
                      size="small"
                      component={Button}
                      width="2rem!important"
                      height="2rem!important"
                      minWidth="2rem!important"
                      minHeight="2rem!important"
                    >
                      <Box
                        component={MoreVert}
                        width="1.25rem!important"
                        height="1.25rem!important"
                        position="relative"
                        top="2px"
                        color={theme.palette.gray[500]}
                      />
                    </Box>
                    <Menu
                      id="simple-menu-5"
                      anchorEl={anchorEl5}
                      keepMounted
                      open={Boolean(anchorEl5)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Action</MenuItem>
                      <MenuItem onClick={handleClose}>Another action</MenuItem>
                      <MenuItem onClick={handleClose}>
                        Something else here
                      </MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Box>
          </TableContainer>
        </Card>
      </Container>
    </>
  );
};

export default Tables;
