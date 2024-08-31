import { Box, Container, Stack } from "@mui/material";
import CreatePost from "../pages/create-post/CreatePost";
import PostNavbar from "../pages/create-post/components/PostNavbar";

const PostLayout = () => {
  return (
    <Container>
      <Stack spacing={2}>
        <PostNavbar />
        <CreatePost />
      </Stack>
    </Container>
  );
};

export default PostLayout;
