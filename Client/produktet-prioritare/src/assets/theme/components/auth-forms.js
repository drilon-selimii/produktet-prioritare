import { makeStyles } from "@material-ui/core";
import theme from "../theme.js";

const componentStyles = makeStyles(() => ({
  backg: {   
    width: "100%",
    height: "768px",
    paddingTop: theme.spacing(6),
    background: "linear-gradient(160deg, #13A1C3 ,#152746)",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2.5rem",
    position: "relative",
    padding: theme.spacing(6),
    borderRadius: "10px",
    opacity: "0.85",  
    backgroundColor:  theme.palette.gray[100]
  },
  tabmenu: {
    position: "absolute",
    left: "50%",
    transform: "translate(-50%,0)",
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
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  submitStyle: {
    margin: theme.spacing(1, 0, 2),
  },
  linkStyle: {
    position: "relative",
    top: "10px",
  },
  buttons: {
    marginTop: theme.spacing(5),
    backgroundColor: "#1171EF",
    "&:hover": {
      backgroundColor: "#118DEF",
    },
  },
}));

export default componentStyles;
