import { Avatar, Box, Button, Stack } from "@mui/material";

import MDEditor, { commands } from "@uiw/react-md-editor";
import { useState } from "react";
import Comment from "./Comment";

const CommentArea = () => {
  const [comment, setComment] = useState("");
  return (
    <Box flexGrow={1} mt={5}>
      <Stack direction="row" alignItems="flex-start" spacing={1.3}>
        <Avatar />
        <Stack alignItems="flex-start" sx={{ width: "100%" }}>
          <MDEditor
            onChange={setComment}
            value={comment}
            commands={[
              commands.bold,
              commands.italic,
              commands.divider,
              commands.unorderedListCommand,
              commands.orderedListCommand,
              commands.divider,
              commands.title,
              commands.hr,
              commands.codeBlock,
              commands.image,
            ]}
            extraCommands={[]}
            preview="edit"
            style={{ width: "100%" }}
          />
          <Stack direction="row" alignItems="center" spacing={1.5} mt={2}>
            <Button disabled variant="contained">
              submit
            </Button>
            <Button disabled variant="outlined">
              preview
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Comment/>
    </Box>
  );
};

export default CommentArea;
