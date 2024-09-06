import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import CakeIcon from "@mui/icons-material/Cake";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
const UserProfileCard = () => {
  return (
    <Box sx={{ position: "relative",  }}>
      <Avatar
        sx={{
          position: "absolute",
          height: 110,
          width: 110,
          aspectRatio: 1 / 1,
          objectFit: "cover",
          top: 0,
          left: "50%",
          transform: "translate(-50%,-50%)",
          border: "8px solid black",
        }}
        src="data:image/jpeg;base64,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"
      />
      <Card>
        <CardHeader
          action={
            <Stack>
              <Button
                size="small"
                sx={{ textTransform: "capitalize" }}
                variant="contained"
              >
                Edit Profile
              </Button>
            </Stack>
          }
        />
        <CardContent sx={{ mt: 3.5 }}>
          <Typography
            textAlign="center"
            variant="h4"
            fontWeight={700}
            sx={{ color: "grey.800" }}
          >
            Omor Faruk
          </Typography>
          <Typography
            textAlign="center"
            variant="body1"
            sx={{ mt: 1, maxWidth: "70%", mx: "auto" }}
          >
            Sr. Front-end Engineer at NexGen | JavaScript | TypeScript | React
            JS | Next JS | HTML | CSS | Tailwind CSS | Shopify Developer | 15k+
            Linkedin
          </Typography>
          <Stack
            sx={{ mt: 2.5 }}
            direction="row"
            alignItems="center"
            justifyContent="center"
            columnGap={2}
            rowGap={1}
            flexWrap="wrap"
          >
            <Stack
              direction="row"
              alignItems="center"
              columnGap={1}
              flexWrap="wrap"
            >
              <Box>
                <PlaceIcon sx={{ color: "gray" }} fontSize="small" />
              </Box>
              <Typography sx={{ color: "gray" }} variant="caption">
                {" "}
                Delhi
              </Typography>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              columnGap={1}
              flexWrap="wrap"
            >
              <Box>
                <CakeIcon sx={{ color: "gray" }} fontSize="small" />
              </Box>
              <Typography sx={{ color: "gray" }} variant="caption">
                {" "}
                Joined on Jan 8, 2023
              </Typography>
            </Stack>

            <Stack
              direction="row"
              flexWrap="wrap"
              columnGap={1}
              alignItems="center"
            >
              <Box>
                <InsertLinkIcon fontSize="small" />
              </Box>
              <Link
                href="https://www.google.com"
                target="_blank"
                underline="hover"
                sx={{
                  display: "block",
                  color: "gray",
                  "&:hover": {
                    color: "primary.main",
                    cursor: "pointer",
                  },
                }}
                variant="caption"
              >
                https://dev.to/abhay1kumar
              </Link>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              flexWrap="wrap"
              columnGap={1}
            >
              <IconButton size="small">
                <GitHubIcon fontSize="small" />
              </IconButton>
              <IconButton size="small">
                <XIcon fontSize="small" />
              </IconButton>
              <IconButton size="small">
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton size="small">
                <FacebookIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserProfileCard;
