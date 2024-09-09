import { Box, Button, IconButton, Stack, Typography } from "@mui/material";

import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import CommentArea from "./CommentArea";
import { useParams } from "react-router-dom";
import { useGetAllCommentsQuery } from "../../feature/posts/commentsApiSlice";

const CommentBox = () => {
  const { postId } = useParams();
  const { data: comments, isLoading } = useGetAllCommentsQuery(postId);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  console.log(comments);

  return (
    <Box flexGrow={1} id="#comments">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="h5" fontWeight={700} sx={{ color: "grey.800" }}>
            Top comments ({comments.data?.length})
          </Typography>
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
        </Stack>
        <Button variant="outlined" color="inherit">
          subscribe
        </Button>
      </Stack>

      <CommentArea comments={comments.data} />
    </Box>
  );
};

export default CommentBox;
