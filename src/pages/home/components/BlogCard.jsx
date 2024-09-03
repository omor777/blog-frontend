import {
  Avatar,
  Button,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import TurnedInOutlinedIcon from "@mui/icons-material/TurnedInOutlined";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useAddLikeMutation } from "../../../feature/posts/postsApiSlice";

const BlogCard = ({ post }) => {
  const { title, content, _id } = post || {};

  const [likePost, { isLoading }] = useAddLikeMutation();

  const readingTime = (text) => {
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    return time;
  };

  const handleLike = async (postId) => {
    console.log(postId);
    try {
      const d = await likePost(postId);
      console.log(d, "handleLike");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card>
      <CardMedia
        sx={{ height: 270 }}
        image="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <CardContent>
        <Stack direction="row" alignItems="flex-start" spacing={2}>
          <Avatar />
          <Stack spacing={2} width={"100%"}>
            <Stack spacing={-0.3}>
              <Typography fontSize="18px">Omor Faruk</Typography>
              <Typography variant="caption" fontSize="12px">
                Posted on Aug 21
              </Typography>
            </Stack>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: "grey.800" }}
            >
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" spacing={4}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconButton onClick={() => handleLike(_id)}>
                    <ThumbUpIcon />
                  </IconButton>
                  <Typography>0 Likes</Typography>
                </Stack>

                <Button
                  sx={{
                    color: "grey.700",

                    "&:hover": {
                      bgcolor: "transparent",
                    },
                  }}
                  startIcon={<ChatBubbleIcon />}
                >
                  <Typography sx={{ textTransform: "capitalize" }}>
                    Comments
                  </Typography>
                </Button>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography>{readingTime(content)} min read</Typography>
                <IconButton>
                  <TurnedInNotOutlinedIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
