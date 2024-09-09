import { Avatar, Box, Button, Paper, Stack } from "@mui/material";

import MarkdownEditor from "@uiw/react-markdown-editor";
import { useState } from "react";
import Comment from "./Comment";

import { useParams } from "react-router-dom";

import "./style/commentArea.css";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getUserInfo } from "../../feature/auth/authSelector";
import { useAddCommentMutation } from "../../feature/posts/commentsApiSlice";

import PropTypes from "prop-types";

const CommentArea = ({ comments }) => {
  const [comment, setComment] = useState("");
  const [isPreview, setIsPreview] = useState(false);
  const { postId } = useParams();
  const loggedInUser = useSelector(getUserInfo);

  const [addComment, { isLoading }] = useAddCommentMutation();

  const handleCommentPreview = () => {
    setIsPreview((prev) => !prev);
  };

  const handleAddComment = async () => {
    try {
      const data = await addComment({ postId, content: comment }).unwrap();

      if (data.success) {
        toast.success("Comment successful");
        setComment("");
      }
    } catch (error) {
      console.log("Failed add comment", error);
    }
  };

  return (
    <Box flexGrow={1} mt={5}>
      <Stack direction="row" alignItems="flex-start" spacing={1.5}>
        <Avatar src={loggedInUser?.image} />
        <Stack alignItems="flex-start" width={"100%"}>
          {!isPreview ? (
            <MarkdownEditor
              height={140}
              value={comment}
              enablePreview={false}
              onChange={(val) => {
                setComment(val);
              }}
            />
          ) : (
            <Paper sx={{ width: "100%", height: 170, p: 2, overflowY: "auto" }}>
              <MarkdownEditor.Markdown source={comment} />
            </Paper>
          )}
          <Stack direction="row" alignItems="center" spacing={1.5} mt={2}>
            <Button
              disabled={!comment}
              onClick={handleAddComment}
              variant="contained"
            >
              submit
            </Button>
            <Button
              onClick={handleCommentPreview}
              disabled={!comment}
              variant="outlined"
            >
              {isPreview ? "Edit" : " preview"}
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Comment comments={comments} />
    </Box>
  );
};

CommentArea.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentArea;
