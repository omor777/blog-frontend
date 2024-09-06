import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from "react";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const PostDetailsLeftSidebar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ mx: "auto" }}>
      <Stack spacing={2} alignItems="center">
        <Button
          sx={{
            "&:hover": {
              bgcolor: "transparent",
            },
          }}
          color="inherit"
        >
          <Tooltip title="Add likes">
            <Stack spacing={1}>
              <FavoriteBorderIcon />
              <Typography>5</Typography>
            </Stack>
          </Tooltip>
        </Button>

        <Button
          sx={{
            "&:hover": {
              bgcolor: "transparent",
            },
          }}
          color="inherit"
        >
          <Tooltip title="Jump to comments">
            <Stack spacing={1}>
              <ChatBubbleOutlineIcon />
              <Typography>3</Typography>
            </Stack>
          </Tooltip>
        </Button>

        <Button
          sx={{
            "&:hover": {
              bgcolor: "transparent",
            },
          }}
          color="inherit"
        >
          <Tooltip title="Save">
            <Stack spacing={1}>
              <BookmarkBorderIcon />
              <Typography>8</Typography>
            </Stack>
          </Tooltip>
        </Button>

        <>
          <IconButton onClick={handleOpenMenu} id="link-menu">
            <MoreHorizIcon />
          </IconButton>
          <Menu
            open={open}
            id="link-menu"
            onClose={handleCloseMenu}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 45,
            }}
            slotProps={{
              paper: {
                sx: {
                  width: 220,
                },
              },
            }}
          >
            <MenuList>
              <MenuItem onClick={handleCloseMenu} sx={{ pr: 0 }}>
                <ListItemText
                  primaryTypographyProps={{
                    fontWeight: 600,
                  }}
                >
                  Copy Link
                </ListItemText>
                <ListItemIcon>
                  <ContentCopyIcon fontSize="small" />
                </ListItemIcon>
              </MenuItem>

              <MenuItem>Share to Twitter</MenuItem>
              <MenuItem>Share to Facebook</MenuItem>
              <MenuItem>Share to Linkedin</MenuItem>
              <MenuItem>Share to Reddit</MenuItem>
              <MenuItem>Report Abuse</MenuItem>
            </MenuList>
          </Menu>
        </>
      </Stack>
    </Box>
  );
};

export default PostDetailsLeftSidebar;
