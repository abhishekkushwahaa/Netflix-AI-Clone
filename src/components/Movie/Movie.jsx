import { Box, Typography, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { selectGenreOrCategory } from "../../features/Category";
import { useState } from "react";
import { useGetPopularMoviesQuery } from "../../services/tmdb";
import Movielists from "../Movielists/Movielists";

const Movie = () => {
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.Category
  );
  const { data, error, isFetching } = useGetPopularMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });
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
