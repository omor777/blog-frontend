import { Box, Container } from "@mui/material";
import Navbar from "../../layouts/shared/Navbar";
import UserProfileCard from "../../components/user-profile/UserProfileCard";

const UserProfile = () => {
  return (
    <Box flexGrow={1} sx={{ bgcolor: "#FBFBFB", minHeight: "100vw" }}>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{
          pt: 18,
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "1fr 1fr",
          gap: 1.5,
        }}
      >
        <Box sx={{ gridColumn: "1 / span 12" }}>
          <UserProfileCard />
        </Box>

        <Box bgcolor={"red"} sx={{ gridColumn: "1 / span 3" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis
          quos labore. Quaerat neque at, accusamus aspernatur eum nemo cumque,
          enim possimus et nisi, in explicabo mollitia tempore quos rerum?
        </Box>

        <Box bgcolor={"purple"} sx={{ gridColumn: "4 / span 9" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias
          earum quos debitis, nemo facilis consequatur tempore explicabo ab
          eveniet labore inventore iure fugiat repudiandae consectetur tempora
          odio maxime modi.
        </Box>
      </Container>
      ;
    </Box>
  );
};

export default UserProfile;
