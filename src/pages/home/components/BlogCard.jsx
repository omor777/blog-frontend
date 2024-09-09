import {
  Avatar,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import Card from "@mui/material/Card";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import TurnedInOutlinedIcon from "@mui/icons-material/TurnedInOutlined";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useAddLikeMutation } from "../../../feature/posts/postsApiSlice";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { readingTimeCount } from "../../../utils/readingTimeCount";

const BlogCard = ({ post, setIsLike }) => {
  const { title, content, _id, likeCount } = post || {};

  const [likePost] = useAddLikeMutation();

  const handleLike = async (postId) => {
    try {
      const d = await likePost(postId).unwrap();
      // console.log(d);
      setIsLike((prev) => !prev);
    } catch (e) {
      console.log(e);
    }
  };

  // console.log(post);

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
            <Link
              component={RouterLink}
              to={`/post/${_id}`}
              underline="none"
              variant="h5"
              fontWeight="bold"
              sx={{
                color: "grey.800",
                "&:hover": {
                  color: "primary.main",
                  cursor: "pointer",
                },
              }}
            >
              {title}
            </Link>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" spacing={4} alignItems="center">
                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconButton onClick={() => handleLike(_id)}>
                    <ThumbUpIcon />
                  </IconButton>
                  <Typography>{likeCount} Likes</Typography>
                </Stack>

                <Link
                  component={RouterLink}
                  to={`/post/${_id}`}
                  href="#comments"
                  sx={{
                    cursor: "pointer",
                    color: "gray",
                    "&:hover": {
                      color: "gray",
                    },
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                  underline="none"
                >
                  <ChatBubbleIcon fontSize="small" />
                  <Typography
                    sx={{ textTransform: "capitalize", userSelect: "none" }}
                  >
                    Comments
                  </Typography>
                </Link>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography>{readingTimeCount(content)} min read</Typography>
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

BlogCard.propTypes = {
  post: PropTypes.object,
};

export default BlogCard;
