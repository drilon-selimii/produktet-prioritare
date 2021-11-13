import theme from '../theme.js';

const componentStyles = () => ({
  header: {
    position: "relative",
    borderRadius: "2px",
    background:
      "linear-gradient(87deg," + theme.palette.info.main + ",#1171ef)",
    paddingBottom: "12rem",
    [theme.breakpoints.up("md")]: {
      paddingTop: "10rem",
    },
  },
  tabmenu: {
    marginTop: "1.5rem",
    marginLeft: "2.5rem",
    position: "absolute",
    zIndex: 3,
    fontWeight: 600
  },
  typography: 
  {
    fontWeight: 700,
    marginLeft: "1rem"
  },  
  tabs: 
  {
    fontWeight: 700
  },
});

export default componentStyles;
