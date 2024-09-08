import { Avatar, Box, Button, Paper, Stack } from "@mui/material";

import "./style/commentArea.css";

import MarkdownEditor from "@uiw/react-markdown-editor";
import { useState } from "react";
import Comment from "./Comment";

const CommentArea = () => {
  const [comment, setComment] = useState("");
  const [isPreview, setIsPreview] = useState(false);

  const handleCommentPreview = () => {
    setIsPreview((prev) => !prev);
  };

  return (
    <Box flexGrow={1} mt={5}>
      <Stack direction="row" alignItems="flex-start" spacing={1.5}>
        <Avatar />
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
            <Button disabled variant="contained">
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

      <Comment />
    </Box>
  );
};

export default CommentArea;
