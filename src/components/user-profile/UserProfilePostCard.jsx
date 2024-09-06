import {
  Avatar,
  Button,
  Card,
  CardContent,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const UserProfilePostCard = () => {
  return (
    <Stack spacing={1.5}>
      <Card>
        <CardContent sx={{ p: 2 }}>
          <Stack direction="row" alignItems="flex-start" spacing={2}>
            <Avatar />
            <Stack>
              <Stack>
                <Typography
                  fontWeight={600}
                  sx={{ color: "grey.700" }}
                  variant="body2"
                >
                  Omor Faruk
                </Typography>
                <Typography variant="caption" color="gray">
                  Sep 5
                </Typography>
              </Stack>

              <Link
                underline="none"
                color="grey.800"
                sx={{
                  "&:hover": {
                    color: "primary.main",
                    cursor: "pointer",
                  },
                  mt: 1.5,
                }}
                variant="h6"
                fontWeight={600}
              >
                Building Accessible & Reusable React Components: Best Practices
                for Modern Web Development
              </Link>

              <Stack
                mt={2.5}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  columnGap={5}
                  rowGap={1}
                  flexWrap="wrap"
                >
                  <Stack direction="row" alignItems="center" columnGap={1.3}>
                    <IconButton size="small">
                      <ThumbUpIcon fontSize="small" color="gray" />
                    </IconButton>
                    <Typography variant="body2">0 Likes</Typography>
                  </Stack>

                  <Button
                    sx={{
                      textTransform: "capitalize",
                      color: "grey.700",
                    }}
                    startIcon={<ChatBubbleOutlineIcon fontSize="small" />}
                  >
                    <Typography variant="body2">Comments</Typography>
                  </Button>
                </Stack>
                <Typography color="gray" variant="body2">
                  4 min read
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
     
    </Stack>
  );
};

export default UserProfilePostCard;
