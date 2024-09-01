import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPostContents } from "../../../feature/posts/postsSelector";
import { removePreview, setPreview } from "../../../feature/posts/postsSlice";

const PostNavbar = () => {
  const { isPreview } = useSelector(getPostContents);
  const dispatch = useDispatch();

  const handlePreview = () => {
    dispatch(setPreview());
  };

  const handleEdit = () => {
    dispatch(removePreview());
  };

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
            <Button
              onClick={handleEdit}
              variant={isPreview ? "outlined" : "contained"}
              color="secondary"
            >
              Edit
            </Button>
            <Button
              onClick={handlePreview}
              variant={isPreview ? "contained" : "outlined"}
              color="success"
            >
              Preview
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default PostNavbar;
