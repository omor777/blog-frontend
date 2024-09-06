import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { useState } from "react";

const Comment = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box mt={5} flexGrow={1}>
      <Stack direction="row" alignItems="flex-start" spacing={2}>
        <Stack spacing={1}>
          <Avatar />
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
        </Stack>

        <Stack width="100%">
          <Card elevation={0} variant="outlined">
            <CardHeader
              sx={{ pl: 0, pt: 0.8 }}
              action={
                <>
                  <IconButton
                    id="link-menu"
                    onClick={handleOpenMenu}
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <MoreHorizIcon />
                  </IconButton>
                  <Menu
                    id="link-menu"
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleCloseMenu}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: -180,
                    }}
                    slotProps={{
                      paper: {
                        sx: {
                          width: 220,
                        },
                      },
                    }}
                  >
                    <MenuItem
                      sx={{
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                      onClick={handleCloseMenu}
                    >
                      Copy link
                    </MenuItem>
                    <MenuItem
                      sx={{
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                      onClick={handleCloseMenu}
                    >
                      Report abuse
                    </MenuItem>
                  </Menu>
                </>
              }
              subheader={
                <Stack direction="row" alignItems="center" spacing={0.4}>
                  <Button sx={{ textTransform: "capitalize" }} color="inherit">
                    Omor
                  </Button>
                  <Typography fontWeight={300}>5 sep</Typography>
                </Stack>
              }
            />

            <CardContent sx={{ pt: 0 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              rem iste? Officia nobis ratione dolorum et vitae fugit pariatur
              nostrum, accusamus assumenda repellendus, quibusdam nulla aperiam
              odio est quo illo!
            </CardContent>
          </Card>
          <Stack direction="row" alignItems="center" mt={1} spacing={2}>
            <Button
              color="inherit"
              size="small"
              startIcon={<FavoriteBorderIcon />}
              sx={{
                textTransform: "capitalize",
                color: "grey.700",
                fontWeight: 300,
              }}
            >
              0 likes
            </Button>
            <Button
              color="inherit"
              size="small"
              sx={{
                color: "grey.700",
                textTransform: "capitalize",
                fontWeight: 300,
              }}
              startIcon={<ChatBubbleIcon />}
            >
              reply
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Comment;
