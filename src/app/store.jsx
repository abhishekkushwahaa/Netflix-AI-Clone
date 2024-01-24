import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/tmdb";

import genreOrCategoryReducer from "../features/Category";
import userReducer from "../features/Auth";

const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    Category: genreOrCategoryReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});

export default store;
