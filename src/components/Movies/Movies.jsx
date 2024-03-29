import { Typography, Grid, Grow, Rating, Tooltip } from "@mui/material";
import useStyle from "./Styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movies = ({ movie, i }) => {
  const textColor = "black";
  // console.log("movie title:", movie.title); // Log the movie title
  const classes = useStyle();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movies}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link className={classes.links} to={`/movies/${movie.id}`}>
          <img
            alt={movie.title}
            className={classes.image}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://www.fillmurray.com/200/300"
            }
          />
          <Typography
            className={classes.title}
            variant="h6"
            style={{ color: textColor }}
          >
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

Movies.propTypes = {
  movie: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
};

export default Movies;
