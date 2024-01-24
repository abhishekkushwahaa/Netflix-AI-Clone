import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  searchContainer: {
    [theme.color.palette.primary.main("white")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "20px",
      width: "100%",
      height: "100%",
    },
  },
  input: {
    color: "white",
    "&::placeholder": {
      color: "white",
    },
  },
}));
