import { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "../Styles";
import { searchMovie } from "../../features/Category";

const Search = () => {
  const [query, setQuery] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  //   console.log("Search");
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("Enter", query);
      dispatch(searchMovie(query));
    }
  };
  return (
    <div className={classes.searchContainer}>
      <TextField
        onKeyPress={handleKeyPress}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        on
        variant="standard"
        placeholder="Search..."
        InputProps={{
          className: classes.input,
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
