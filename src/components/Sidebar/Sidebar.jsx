import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./Styles";
import { Home } from "@mui/icons-material";
import HdOutlinedIcon from "@mui/icons-material/HdOutlined";
import { useGetGenresQuery } from "../../services/tmdb";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top-rated" },
  { label: "Upcoming", value: "upcoming" },
];

const movieCategories = [
  { label: "Comedy", value: "comedy" },
  { label: "Horror", value: "horror" },
  { label: "Action", value: "action" },
  { label: "Animation", value: "animation" },
];

const Sidebar = ({ setMobileOpen }) => {
  const Classes = useStyles();
  const { data, isFetching } = useGetGenresQuery();
  // console.log(data);
  return (
    <>
      <Link to="/" className={Classes.imageLink}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
          className={Classes.image}
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={Classes.links} to="/">
            <ListItem onClick={() => {}} button>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <Link key={name} className={Classes.links} to="/">
              <ListItem onClick={() => {}} button>
                <ListItemIcon>
                  <HdOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </>
  );
};

export default Sidebar;
