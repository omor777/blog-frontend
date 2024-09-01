import { Box, Container, Stack } from "@mui/material";
import CreatePost from "../pages/create-post/CreatePost";
import PostNavbar from "../pages/create-post/components/PostNavbar";
import { useSelector } from "react-redux";
import { getPostContents } from "../feature/posts/postsSelector";
import PreviewPost from "../pages/create-post/components/PreviewPost";

const PostLayout = () => {
  const { isPreview } = useSelector(getPostContents);
  return (
    <Box>
      <Container>
        <Stack spacing={2}>
          <PostNavbar />
          <CreatePost />
        </Stack>
      </Container>
    </Box>
  );
};

export default PostLayout;
