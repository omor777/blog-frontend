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
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { readingTimeCount } from "../../utils/readingTimeCount";
const UserProfilePostCard = ({ posts }) => {
  return (
    <Stack spacing={1.5}>
      {posts?.length > 0 &&
        posts.map(({ _id, title, content, totalLikes, userInfo }) => {
          return (
            <Card key={_id}>
              <CardContent sx={{ p: 2 }}>
                <Stack direction="row" alignItems="flex-start" spacing={2}>
                  <Avatar />
                  <Stack>
                    <Stack spacing={0.3}>
                      <Typography
                        fontWeight={600}
                        sx={{ color: "grey.700", textTransform: "capitalize" }}
                        variant="body2"
                      >
                        {userInfo?.name}
                      </Typography>
                      <Typography variant="caption" color="gray">
                        {new Date(userInfo?.createdAt).toLocaleDateString()}
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
                      {title}
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
                        <Stack
                          direction="row"
                          alignItems="center"
                          columnGap={1}
                        >
                          <IconButton size="small">
                            <FavoriteBorderIcon fontSize="small" color="gray" />
                          </IconButton>
                          <Typography variant="body2">
                            {totalLikes} Likes
                          </Typography>
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
                        {readingTimeCount(content)} min read
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          );
        })}
    </Stack>
  );
};

export default UserProfilePostCard;
