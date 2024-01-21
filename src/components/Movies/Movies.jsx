import { Typography, Grid } from "@mui/material";
import useStyle from "./Styles";
import PropTypes from "prop-types";

const Movies = ({ movie }) => {
  // console.log("movie title:", movie.title); // Log the movie title
  const classes = useStyle();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movies}>
      <Typography className={classes.title} variant="h5">
        {movie.title}
      </Typography>
    </Grid>
  );
};

Movies.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movies;
