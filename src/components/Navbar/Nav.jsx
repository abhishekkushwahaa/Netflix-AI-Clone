import { useState } from "react";
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
// import { useTheme } from '@mui/material/styles';

import useStyles from "./Styles";
import Sidebar from "../Sidebar/Sidebar";
import Search from "../Search/Search";

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const Classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isAuthenticated = true;

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
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/:id`}
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
