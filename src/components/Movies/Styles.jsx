import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  movies: {
    padding: "10px",
    overflow: "hidden",
  },
  links: {
    alignItems: "center",
    fontFamily: "Roboto",
    fontWeight: "regular",
    textDecoration: "none",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
    "&:hover": {
      cursor: "pointer",
      textDecoration: "none",
    },
  },
  image: {
    marginTop: "10px",
    justifyContent: "space-between",
    width: "100%",
    height: "300px",
    borderRadius: "10px",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  title: {
    color: "theme.palette.text.primary",
    textOverflow: "ellipsis",
    width: "230px",
    whiteSpace: "wrap",
    marginTop: "5px",
    marginBottom: 0,
    textAlign: "left",
  },
}));
