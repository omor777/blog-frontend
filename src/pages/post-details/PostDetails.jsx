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
import MDEditor from "@uiw/react-md-editor";

import { useGetPostQuery } from "../../feature/posts/postsApiSlice";
import { useParams } from "react-router-dom";
import CommentBox from "../../components/post-details/CommentBox";
import PostDetailsLeftSidebar from "../../components/post-details/PostDetailsLeftSidebar";
import PostDetailsRightSidebar from "../../components/post-details/PostDetailsRightSidebar";
const PostDetails = () => {
  const { postId } = useParams();

  const { data: post, isLoading } = useGetPostQuery(postId);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  const {
    title,
    content,
    image,
    createdAt,
    author: { name, image: authorImage },
  } = post.data;

  console.log(post.data);

  return (
    <Box bgcolor="#F5F5F5">
      <Container maxWidth="xl" sx={{ mt: 9.5 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              sm: "auto 1fr",
              md: "max(80px,5%) 1fr max(240px,20%)",
            },

            gap: 3,
          }}
        >
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "flex-start",
            }}
          >
            <PostDetailsLeftSidebar />
          </Box>

          <Box>
            <Card>
              <CardMedia
                sx={{ height: 350, objectFit: "cover" }}
                image={post?.data.image}
              />
              <CardContent>
                <Stack direction="row" spacing={2.5}>
                  <Avatar />
                  <Stack spacing={-0.2}>
                    <Typography>{post?.data?.author?.name}</Typography>
                    <Typography variant="caption">1 day ago</Typography>
                  </Stack>
                </Stack>

                <Typography variant="h3">{title}</Typography>

                {/* <MDEditor.Markdown source={content} /> */}
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, qui?
                </Typography>
                <Divider sx={{ my: 2 }} />
                {/* Comment Area */}
                <CommentBox />
              </CardContent>
            </Card>
          </Box>
          <Box
            // bgcolor="blue"
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <PostDetailsRightSidebar />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PostDetails;
