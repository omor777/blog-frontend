import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const PostDetailsRightSidebar = () => {
  return (
    <Stack spacing={2}>
      {/* user profile card */}
      <Card>
        <CardHeader sx={{ bgcolor: "#BBC5E0" }} />
        <CardContent sx={{ mt: -3.2 }}>
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <Avatar />
            <Typography fontWeight={600} sx={{ color: "grey.800" }}>
              Omor Faruk
            </Typography>
          </Stack>

          <Button variant="contained" fullWidth sx={{ mt: 2 }}>
            Follow
          </Button>
          <Typography sx={{ mt: 2 }} variant="body2">
            🌍 Senior Frontend Developer
          </Typography>

          <Stack my={2}>
            <Typography
              variant="caption"
              fontWeight={600}
              sx={{ textTransform: "uppercase" }}
            >
              Location
            </Typography>
            <Typography variant="caption">USA</Typography>
          </Stack>

          <Stack>
            <Typography variant="caption" fontWeight={600}>
              JOINED
            </Typography>
            <Typography variant="caption">sep 3, 2024</Typography>
          </Stack>
        </CardContent>
      </Card>

      {/* User related article */}
      <Card>
        <CardContent>
          <Typography variant="h6">
            More from{" "}
            <Link sx={{ cursor: "pointer" }} underline="none">
              Nevo David
            </Link>
          </Typography>
          <Divider sx={{ mt: 1 }} />
          <List>
            {[1, 2, 3].map((item) => (
              <React.Fragment key={item}>
                <ListItem dense disableGutters disablePadding>
                  <ListItemText
                    primary={
                      <Link
                        underline="hover"
                        color="gray"
                        sx={{
                          cursor: "pointer",
                          "&:hover": {
                            color: "primary.main",
                          },
                          fontSize: "0.875rem",
                        }}
                      >
                        How I built my open okay scheduling tool 🤯
                      </Link>
                    }
                    secondary={
                      <Stack
                        mt={0.5}
                        direction="row"
                        columnGap={1.6}
                        rowGap={0.3}
                        flexWrap="wrap"
                        alignItems="flex-start"
                      >
                        <Typography variant="caption">#JavaScript</Typography>
                        <Typography variant="caption">#React</Typography>
                        <Typography variant="caption">#Next.js</Typography>
                        <Typography variant="caption">#CSS</Typography>
                      </Stack>
                    }
                  ></ListItemText>
                </ListItem>
                <Divider sx={{ my: 0.5 }} />
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default PostDetailsRightSidebar;
