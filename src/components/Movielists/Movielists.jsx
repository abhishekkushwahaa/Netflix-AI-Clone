import { Grid } from "@mui/material";
import useStyles from "./Styles";
import Movies from "../Movies/Movies";
import PropTypes from "prop-types";

// const Movielists = ({ movie }) => {
//   const classes = useStyles();
//   console.log("movie title:", movie.title);
//   return (
//     <Grid container className={classes.movieContainer}>
//       {movie.results.map((movie, i) => (
//         <Movies key={i} movie={movie} i={i} />
//       ))}
//     </Grid>
//   );
// };

const Movielists = ({ movies }) => {
  const classes = useStyles();

  // Log the title for each movie in the results array
  // movies.results.forEach((movie) => {
  //   console.log("movie title:", movie.title);
  // });

  return (
    <Grid container className={classes.movieContainer}>
      {movies.results.map((movie, i) => (
        <Movies key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

Movielists.propTypes = {
  movies: PropTypes.shape({
    results: PropTypes.array,
    title: PropTypes.string,
  }),
};

export default Movielists;
