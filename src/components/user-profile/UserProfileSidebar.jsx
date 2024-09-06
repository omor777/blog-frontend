import {
  Box,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TagIcon from "@mui/icons-material/Tag";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const UserProfileSidebar = () => {
  return (
    <Stack spacing={1.5}>
      <Card>
        <CardContent>
          <Typography fontWeight={600} sx={{ color: "grey.700" }}>
            Badges
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Stack
            direction="row"
            alignItems="center"
            columnGap={1.5}
            rowGap={1}
            flexWrap="wraps"
            justifyContent="center"
          >
            <Box
              component="img"
              src="https://media.dev.to/cdn-cgi/image/width=180,height=,fit=scale-down,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fbadge%2Fbadge_image%2F2%2FVersion2-08.png"
              sx={{ maxWidth: 80, aspectRatio: 1 / 1, objectFit: "cover" }}
            />
            <Box
              component="img"
              src="https://media.dev.to/cdn-cgi/image/width=180,height=,fit=scale-down,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fbadge%2Fbadge_image%2F2%2FVersion2-08.png"
              sx={{ maxWidth: 80, aspectRatio: 1 / 1, objectFit: "cover" }}
            />
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <List>
          <ListItem disableGutters disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ mr: -2.5 }}>
                <AssignmentIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" fontWeight={300}>
                    8 posts published
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>

          <ListItem disableGutters disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ mr: -2.5 }}>
                <ChatBubbleOutlineIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" fontWeight={300}>
                    1 comments written
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>

          <ListItem disableGutters disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ mr: -2.5 }}>
                <TagIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" fontWeight={300}>
                    4 tags followed
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Card>
    </Stack>
  );
};

export default UserProfileSidebar;
