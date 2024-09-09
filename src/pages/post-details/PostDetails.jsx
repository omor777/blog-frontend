import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
// import MarkdownPreview from "@uiw/react-markdown-preview";
// import MarkdownEditor from "@uiw/react-markdown-editor";
import MarkdownEditor from "@uiw/react-markdown-editor";

import { useGetPostQuery } from "../../feature/posts/postsApiSlice";
import { useParams } from "react-router-dom";
import CommentBox from "../../components/post-details/CommentBox";
import PostDetailsLeftSidebar from "../../components/post-details/PostDetailsLeftSidebar";
import PostDetailsRightSidebar from "../../components/post-details/PostDetailsRightSidebar";

// TODO: debug warning in the console

const PostDetails = () => {
  const { postId } = useParams();

  const { data: post, isLoading, isSuccess } = useGetPostQuery(postId);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  const { title, content, image, createdAt, userInfo } = post.data;

  return (
    <Box flexGrow={1} bgcolor="#F5F5F5">
      <Container maxWidth="xl" sx={{ pt: 9.5 }}>
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: "repeat(12, 1fr)",
            gap: 1.6,
          }}
        >
          <Box
            gridColumn={"1/ span 1"}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <PostDetailsLeftSidebar />
          </Box>
          <Box
            sx={{
              gridColumn: {
                xs: "1 / span 12",
                sm: "2 / span 11",
                md: "2 / span 8",
              },
            }}
          >
            <Card>
              <CardMedia
                sx={{ height: 350, objectFit: "cover", maxWidth: "100%" }}
                image={image}
              />
              <CardContent>
                <Stack spacing={1.5} direction="row">
                  <Avatar src={userInfo?.image} />
                  <Stack spacing={-0.2}>
                    <Typography>{userInfo?.name}</Typography>
                    <Typography variant="caption">
                      {new Date(createdAt).toLocaleDateString()}
                    </Typography>
                  </Stack>
                </Stack>

                <Typography
                  sx={{
                    mt: 2,
                    mb: 1,
                    fontSize: "clamp(38px,5vw,54px)",
                    color: "grey.700",
                  }}
                  fontWeight={700}
                >
                  {title}
                </Typography>

                

                <Divider sx={{ my: 2 }} />

                <CommentBox />
              </CardContent>
            </Card>
          </Box>
          <Box
            gridColumn="10 / span 3"
            minWidth={240}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <PostDetailsRightSidebar />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PostDetails;
