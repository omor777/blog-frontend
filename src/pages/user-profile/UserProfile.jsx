import { Box, Container, Stack } from "@mui/material";
import Navbar from "../../layouts/shared/Navbar";
import UserProfileCard from "../../components/user-profile/UserProfileCard";
import UserProfileSidebar from "../../components/user-profile/UserProfileSidebar";
import UserProfilePostCard from "../../components/user-profile/UserProfilePostCard";
import { useGetUserInfoQuery } from "../../feature/users/userApiSlice";
import addUserInfoToEachBlogPost from "../../utils/blogPost";

const UserProfile = () => {
  const { data, isLoading } = useGetUserInfoQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return <div>Loading....</div>;
  }

  const { allBlogPosts, userDetails, totalPosts, totalComments } = data || {};

  const posts = addUserInfoToEachBlogPost(allBlogPosts, userDetails);

  return (
    <Box flexGrow={1} sx={{ bgcolor: "#FBFBFB", minHeight: "100vw" }}>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{
          pt: 18,
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "auto 1fr",
          gap: 1.5,
        }}
      >
        <Box sx={{ gridColumn: "1 / span 12" }}>
          <UserProfileCard userDetails={userDetails} />
        </Box>

        <Box
          sx={{
            gridColumn: "1 / span 3",
            minWidth: 200,
            display: { xs: "none", md: "block" },
          }}
        >
          <UserProfileSidebar
            totalPosts={totalPosts}
            totalComments={totalComments}
          />
        </Box>

        <Stack
          spacing={1.5}
          sx={{ gridColumn: { xs: "1 / span 12", md: "4 / span 9" } }}
        >
          <UserProfilePostCard posts={posts} />
        </Stack>
      </Container>
      ;
    </Box>
  );
};

export default UserProfile;
