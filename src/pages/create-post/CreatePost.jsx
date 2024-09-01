import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import MarkdownPreview from "@uiw/react-markdown-preview";

import "./toolbar.css";
import {
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  Stack,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { VisuallyHiddenInput } from "../register/Register";
import useImageUpload from "../../hooks/useImageUpload";
import { useDispatch, useSelector } from "react-redux";
import { getPostContents } from "../../feature/posts/postsSelector";
import {
  removePreviewImg,
  setPostContent,
  setPostTitle,
  setPreviewImg,
} from "../../feature/posts/postsSlice";
import PreviewPost from "./components/PreviewPost";

export default function CreatePost() {
  // const [previewImg, setPreviewImg] = useState(null);
  const { loading, imageUrl, imageUpload } = useImageUpload();
  const [value, setValue] = useState();
  const { title, content, previewImg, isPreview } =
    useSelector(getPostContents);

  const dispatch = useDispatch();

  console.log(content);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setPreviewImg(URL.createObjectURL(file)));
    imageUpload(file);
  };

  const handleRemovePreviewImg = () => {
    dispatch(removePreviewImg());
  };

  const handlePostTitleChange = (e) => {
    dispatch(setPostTitle(e.target.value));
  };

  const handlePostContentChange = (value) => {
    console.log(value);
    dispatch(setPostContent(value));
  };

  return (
    <Stack spacing={2}>
      {!isPreview ? (
        <Paper variant="outlined">
          <Box p={5}>
            <Stack alignItems="center" mb={4} direction="row" spacing={6}>
              {previewImg ? (
                <Box
                  component="img"
                  src={previewImg}
                  height={140}
                  width={140}
                ></Box>
              ) : (
                <Button
                  component="label"
                  role={undefined}
                  tabIndex={-1}
                  variant="outlined"
                  color="inherit"
                >
                  <VisuallyHiddenInput
                    onChange={handleImageUpload}
                    type="file"
                  />
                  Add a cover image
                </Button>
              )}
              {previewImg && (
                <Stack direction="row" alignItems="center" spacing={1.5}>
                  <Button
                    component="label"
                    role={undefined}
                    variant="outlined"
                    color="inherit"
                  >
                    Change
                    <VisuallyHiddenInput
                      type="file"
                      onChange={handleImageUpload}
                    />
                  </Button>
                  <Button
                    onClick={handleRemovePreviewImg}
                    variant="outlined"
                    color="error"
                  >
                    Remove
                  </Button>
                </Stack>
              )}
            </Stack>
            <InputBase
              onChange={handlePostTitleChange}
              value={title}
              sx={{
                "& > ::placeholder": {
                  fontSize: "3rem",
                  fontWeight: 700,
                  color: "black",
                  textAlign: "start",
                },
                "& .MuiInputBase-input": {
                  fontSize: "3rem",
                  fontWeight: 700,
                  color: "grey.700",
                },
              }}
              placeholder="New post title here..."
              fullWidth
            />
          </Box>
          <MDEditor
            value={content}
            onChange={handlePostContentChange}
            extraCommands={[]}
            visibleDragbar={false}
            preview="edit"
            height={380}
          />
        </Paper>
      ) : (
        <PreviewPost />
      )}

      <Stack alignItems="center" direction="row" spacing={1}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button variant="contained">publish</Button>
          <Button color="inherit">safe draft</Button>
        </Stack>
        <Stack direction="row" alignItems="center">
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <Button color="inherit">Revert new changes</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
