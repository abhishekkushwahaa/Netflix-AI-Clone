import { Box, Typography, CircularProgress } from "@mui/material";
// import { useSelector } from "react-redux";

import { useGetPopularMoviesQuery } from "../../services/tmdb";
import Movielists from "../Movielists/Movielists";

const Movie = () => {
  const { data, error, isFetching } = useGetPopularMoviesQuery();
  console.log(data);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No Movies Found <br /> Please search something else
        </Typography>
      </Box>
    );
  }

  if (error) {
    return "An error has occurred...";
  }

  return (
    <div>
      <Movielists movies={data} />
    </div>
  );
};

export default Movie;
