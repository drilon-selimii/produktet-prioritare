import theme from '../theme.js';

const componentStyles = () => ({
  header: {
    position: "relative",
    borderRadius: "2px",
    background:
      "linear-gradient(87deg," + theme.palette.info.main + ",#1171ef)",
    paddingBottom: "12rem",
    [theme.breakpoints.up("md")]: {
      paddingTop: "6rem",
    },
  },
});

export default componentStyles;
