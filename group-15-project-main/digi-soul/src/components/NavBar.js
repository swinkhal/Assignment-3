import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import routes from "../routes/routes";
import dslogo from "../p-images/ds-logo.png";
import "./navbar.css";

const settings = [
  { name: "My Profile", path: "" },
  { name: "Saved Items", path: "" },
  { name: "My Events", path: "/events/myevents" },
  { name: "My Reviews", path: "" },
  { name: "My Blogs", path: "" },
];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [Login, setLogin] = React.useState(localStorage.getItem('login'));

  React.useEffect(() => {
    if (Login == null || Login === 'false'){
      setLogin('false');
      localStorage.setItem('login', 'false')
      console.log("false called")
    }
    else if (Login === 'true' ){
      localStorage.setItem('login', 'true');
      setLogin('true');
      console.log("true called")
    }
    console.log(`login value ${Login}`)
  }, [Login])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const LogoutHandle = () => {
    localStorage.setItem('login', 'false')
    setLogin('false');
  }
  const LoginSignUp = () => {
    console.log(`login value in if-else ${Login}`)
    console.log("Login called")
    return (<Button
      key="logout"
      onClick={handleCloseNavMenu}
      component="a"
      href="/login"
      sx={{ ml: 3, my: 2, color: "black", display: "block" }}
    >
      <Typography textAlign="center" fontWeight='500' fontSize='0.875rem' font-family={["Roboto", "Helvetica","Arial", "sans-serif"]}>Login/SignUp</Typography>
    </Button>)
  }

  const userProfile = () => {
    console.log(`login value in UP if-else ${Login}`)
    console.log("Login called")
    return (<Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar src="/broken-image.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography
              id={setting.name}
              textAlign="center"
              component="a"
              href={setting.path}
              sx={{textDecoration:"none"}}
              color="black"            >
              {setting.name}
            </Typography>
          </MenuItem>
        ))}
        <MenuItem key={{ name: "Logout", path: "/login" }} onClick={handleCloseUserMenu}>
            <Typography
              id={"Logout"}
              textAlign="center"
              component="a"
              href={"/login"}
              sx={{textDecoration:"none"}}
              color="black"
              onClick={LogoutHandle}
            >
              {'Logout'}
            </Typography>
          </MenuItem>
      </Menu>
    </Box>)
  }

  return (
    <AppBar
      sx={{
        bgcolor: "white",
        boxShadow:
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
      }}
      position="sticky"
    >
      <Container maxWidth="l">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src={dslogo}
              alt="logo"
              title="DigiSoul"
              className="logo-main"
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {routes
                .filter((route) => route.name)
                .map((route) => (
                  <MenuItem
                    key={route.name}
                    onClick={handleCloseNavMenu}
                    component="a"
                    href={route.path}
                  >
                    <Typography textAlign="center" >{route.name}</Typography>
                  </MenuItem>
                ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={dslogo} alt="logo" className="logo-nav" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {routes
              .filter((route) => route.name)
              .map((route) => (
                <Button
                  key={route.name}
                  onClick={handleCloseNavMenu}
                  component="a"
                  href={route.path}
                  sx={{ ml: 3, my: 2, color: "black", display: "block" }}
                >
                  {route.name}
                </Button>
              ))}
          </Box>
          { Login === 'false' ?  LoginSignUp() : userProfile()}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;