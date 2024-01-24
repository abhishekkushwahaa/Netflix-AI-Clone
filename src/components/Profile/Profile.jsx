import { useSelector } from "react-redux";
import { userSelector } from "../../features/Auth";
import { Typography, Button, Box } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";

const Profile = () => {
  const logout = () => {
    localStorage.removeItem("request_token");
    localStorage.removeItem("session_id");
    localStorage.clear();
    window.location.href = "/";
  };

  const { favoriteMovies } = [];

  const { user } = useSelector((state) => state.user);
  console.log(user);
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.length ? (
        <Typography variant="h5">No Favorite Movies, Add Some</Typography>
      ) : (
        <Box display="flex" flexWrap="wrap">
          Favorite Movies
        </Box>
      )}
    </Box>
  );
};

export default Profile;
