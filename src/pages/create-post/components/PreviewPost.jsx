import MarkdownEditor from "@uiw/react-markdown-editor";
import { useSelector } from "react-redux";
import { getPostContents } from "../../../feature/posts/postsSelector";
import { Box, Paper } from "@mui/material";

const PreviewPost = () => {
  const { content, previewImg } = useSelector(getPostContents);
  return (
    <Paper
      variant="outlined"
      sx={{ height: "calc(677px + 34px)", overflowY: "auto" }}
    >
      <Box
        component="img"
        src={previewImg}
        sx={{
          width: "100%",
          maxHeight: "550px",
          objectFit: "cover",
        }}
      >
      </Box>
        <MarkdownEditor.Markdown source={content} />
    </Paper>
  );
};

export default PreviewPost;
