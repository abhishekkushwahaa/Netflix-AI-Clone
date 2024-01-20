import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  useMediaQuery,
} from "@mui/material";
import { useSelector } from "react-redux";

import { useGetPopularMoviesQuery } from "../../services/tmdb";

const Movie = () => {
  const { data } = useGetPopularMoviesQuery();
  console.log(data);

  return <div>Movie</div>;
};

export default Movie;
