import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const PostNavbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        variant="outlined"
        elevation={0}
        sx={{
          "&.MuiPaper-outlined": {
            border: "none",
          },
        }}
      >
        <Toolbar disableGutters>
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
              mr: 2,
            }}
          >
            DEV
          </Button>
          <Typography fontWeight={400}>Create Post</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="secondary">
              Edit
            </Button>
            <Button variant="outlined" color="success">
              Preview
            </Button>
            <Tooltip title="Leave the page">
              <IconButton color="error" edge="start">
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default PostNavbar;
