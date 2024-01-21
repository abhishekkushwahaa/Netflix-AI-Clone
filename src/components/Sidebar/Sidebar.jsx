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
import { useGetGenresQuery } from "../../services/tmdb";
import genreIcons from "../../assets/genres/index";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top-rated" },
  { label: "Upcoming", value: "upcoming" },
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
                <img
                  src={genreIcons[label.toLowerCase()]}
                  alt={label}
                  className={Classes.genreImages}
                  height={25}
                />
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
            <Link key={id} className={Classes.links} to="/">
              <ListItem onClick={() => {}} button>
                <ListItemIcon>
                  <img
                    src={genreIcons[name.toLowerCase()]}
                    alt={name}
                    className={Classes.genreImages}
                    height={25}
                  />
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
