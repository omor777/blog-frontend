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

import "./style/postDetails.css";

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
                image={post?.data.image}
              />
              <CardContent>
                <Stack spacing={1.5} direction="row">
                  <Avatar />
                  <Stack spacing={-0.2}>
                    <Typography>{post?.data?.author?.name}</Typography>
                    <Typography variant="caption">1 day ago</Typography>
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

                <MarkdownEditor.Markdown source={content} />

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

      {/* <Container maxWidth="xl" sx={{ mt: 9.5 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              sm: "1fr",
              md: "max(80px,5%) 1fr max(240px,20%)",
            },

            gap: 3,
          }}
        >
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            flexGrow={1}
          >
            <PostDetailsLeftSidebar />
          </Box>

          <Box width={"100%"}>
            <Card sx={{ width: "100%" }}>
              <CardMedia
                sx={{ height: 350, objectFit: "cover", maxWidth: "100%" }}
                image={post?.data.image}
              />
              <CardContent sx={{ width: "100%" }}>
                <Stack spacing={2.5} width={"100%"}>
                  <Avatar />
                  <Stack spacing={-0.2}>
                    <Typography>{post?.data?.author?.name}</Typography>
                    <Typography variant="caption">1 day ago</Typography>
                  </Stack>
                </Stack>

                <Typography variant="h3">{title}</Typography>

                <MarkdownEditor.Markdown
                  source={content}
                  width="200px"
                  className="md-preview-css"
                />

                <Divider sx={{ my: 2 }} />

                <CommentBox />
              </CardContent>
            </Card>
          </Box>

          <Box
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
      </Container> */}
    </Box>
  );
};

export default PostDetails;
