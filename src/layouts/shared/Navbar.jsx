import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, getUserInfo } from "../../feature/auth/authSelector";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LogoutIcon from "@mui/icons-material/Logout";
import { logoutAction } from "../../feature/auth/authSlice";

const Search = styled("form")(({ theme }) => {
  return {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  };
});

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  bgcolor: "transparent",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => {
  return {
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
        "&:focus": {
          width: "30ch",
        },
      },
    },
  };
});

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUserInfo);
  console.log(user);
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          "&.MuiAppBar-root": {
            boxShadow: 1,
          },
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Button
            component={Link}
            to="/"
            variant="contained"
            sx={{
              boxShadow: "none",
              bgcolor: "primary.main",
              color: "grey.50",
              "&:hover": {
                boxShadow: "none",
                bgcolor: "primary.dark",
              },
              border: "2px solid white",
              mr: 1,
            }}
          >
            DEV
          </Button>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search..." />
          </Search>
          <Box flexGrow={1} />

          {isLoggedIn ? (
            <Stack direction="row" alignItems="center">
              <Button
                component={Link}
                to="/create-post"
                sx={{ whiteSpace: "nowrap" }}
                variant="outlined"
                color="inherit"
              >
                Create Post
              </Button>
              <IconButton color="inherit" sx={{ ml: 1, mr: 0.5 }}>
                <NotificationsIcon fontSize="large" />
              </IconButton>

              <Box>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleOpenMenu}
                    size="small"
                    aria-controls={open ? "account-mene" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar
                      src={user?.image}
                      alt={user?.name}
                      sx={{ width: 40, height: 40, aspectRatio: 1 / 1 }}
                    ></Avatar>
                  </IconButton>
                </Tooltip>

                <Menu
                  open={open}
                  id="account-mene"
                  anchorEl={anchorEl}
                  onClose={handleCloseMenu}
                  onClick={handleCloseMenu}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  slotProps={{
                    paper: {
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 5px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        width: 210,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&::before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    },
                  }}
                >
                  <MenuItem dense onClick={handleCloseMenu}>
                    <Avatar src={user?.image} alt={user?.name} />
                    <Stack spacing={-0.5}>
                      <Typography>Profile</Typography>
                      <Typography variant="caption">@{user?.name}</Typography>
                    </Stack>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleCloseMenu}>
                    <ListItemIcon>
                      <DashboardIcon fontSize="small" />
                    </ListItemIcon>
                    Dashboard
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/create-post"
                    onClick={handleCloseMenu}
                  >
                    <ListItemIcon>
                      <NoteAddIcon fontSize="small" />
                    </ListItemIcon>
                    Create Post
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <LibraryBooksIcon fontSize="small" />
                    </ListItemIcon>
                    Reading List
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    onClick={() => {
                      handleCloseMenu();
                      handleLogout();
                    }}
                  >
                    <ListItemIcon>
                      <LogoutIcon fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            </Stack>
          ) : (
            <Stack direction="row" spacing={2}>
              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>
              <Button
                component={Link}
                to="/register"
                color="inherit"
                variant="outlined"
                sx={{ whiteSpace: "nowrap" }}
              >
                Create account
              </Button>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
