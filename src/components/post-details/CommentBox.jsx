import { Box, Button, IconButton, Stack, Typography } from "@mui/material";

import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import CommentArea from "./CommentArea";

const CommentBox = () => {
  return (
    <Box flexGrow={1}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="h5" fontWeight={700} sx={{ color: "grey.800" }}>
            Top comments (9)
          </Typography>
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
        </Stack>
        <Button variant="outlined" color="inherit">
          subscribe
        </Button>
      </Stack>

      <CommentArea />
    </Box>
  );
};

export default CommentBox;
