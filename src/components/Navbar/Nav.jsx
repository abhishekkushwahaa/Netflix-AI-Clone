import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import { Menu, AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { fetchToken, fetchSessionId, moviesAPI } from "../../utils";
import useStyles from "./Styles";
import Sidebar from "../Sidebar/Sidebar";
import Search from "../Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { setUser, userSelector } from "../../features/Auth";

const Nav = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [mobileOpen, setMobileOpen] = useState(false);
  const Classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 600px)");

  const token = localStorage.getItem("request_token");
  const sessionIdFromLocalStorage = localStorage.getItem("session_id");

  const dispatch = useDispatch();

  console.log(user);

  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesAPI.get(
            `/account?session_id=${sessionIdFromLocalStorage}`
          );
          dispatch(setUser(userData));
        } else {
          const sessionId = await fetchSessionId(token);
          const { data: userData } = await moviesAPI.get(
            `/account?session_id=${sessionId}`
          );

          dispatch(setUser(userData));
        }
      }
    };
    logInUser();
  }, [token]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={Classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className={Classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/${user.id}`}
                className={Classes.linkButton}
                onClick={() => {}}
              >
                {!isMobile && <></>}
                <Avatar
                  alt="Remy Sharp"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                  sx={{ width: 30, height: 30, mr: 2 }}
                  className={Classes.avatar}
                />
              </Button>
            )}
          </div>
          {isMobile && "Search..."}
        </Toolbar>
      </AppBar>
      <div>
        <nav className={Classes.drawer}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
              className={Classes.drawerBackground}
              classes={{ paper: Classes.drawerPaper }}
              ModalProps={{ keepMounted: true }}
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          ) : (
            <Drawer
              classes={{ paper: Classes.drawerPaper }}
              variant="permanent"
              open
            >
              <Sidebar setMobileOpen={setMobileOpen} />
            </Drawer>
          )}
        </nav>
      </div>
    </>
  );
};

export default Nav;
