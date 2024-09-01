import React from "react";
import MDEditor, { commands } from "@uiw/react-md-editor";

import "./toolbar.css";
import {
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  Stack,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import SettingsIcon from "@mui/icons-material/Settings";

export default function CreatePost() {
  const [value, setValue] = React.useState();
  return (
    <Stack spacing={2}>
      <Paper variant="outlined">
        <Box p={5}>
          <Stack alignItems="flex-start" mb={4}>
            <Button variant="outlined" color="info">
              Add a cover image
            </Button>
          </Stack>
          <InputBase
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
          value={value}
          onChange={setValue}
          extraCommands={[]}
          visibleDragbar={false}
          preview="edit"
          height={470}
        />
      </Paper>

      <Stack alignItems="center" direction="row" spacing={1}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button variant="contained">publish</Button>
          <Button variant="outlined" color="success">
            safe draft
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center">
          <IconButton>
            <SettingsIcon fontSize="large" />
          </IconButton>
          <Button color="inherit">Revert new changes</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
