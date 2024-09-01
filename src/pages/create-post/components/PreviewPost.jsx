import MarkdownPreview from "@uiw/react-markdown-preview";
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
      ></Box>
      <MarkdownPreview
        source={content}
        style={{ padding: "2rem" }}
        rehypeRewrite={(node, _index, parent) => {
          if (
            node.tagName === "a" &&
            parent &&
            /^h(1|2|3|4|5|6)/.test(parent.tagName)
          ) {
            parent.children = parent.children.slice(1);
          }
        }}
      />
    </Paper>
  );
};

export default PreviewPost;
