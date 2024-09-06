import { Outlet } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "./shared/Navbar";
import { Box, Container, CssBaseline } from "@mui/material";

const Root = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Outlet />
      {/* <Box>
        <Box component="header" mb={1}>
          <Container maxWidth="xl">
            <Navbar />
          </Container>
        </Box>
        <Container
          maxWidth="xl"
          sx={{
            display: "grid",
            gridTemplateColumns: { lg: "300px 1fr 300px" },
            gap: 3,
            height: "100vh",
          }}
        >
          <Box bgcolor={"blue"} component="aside">
            Left side bar
          </Box>
          <Box component="main">
            <Outlet />
          </Box>
          <Box bgcolor={"purple"} component="aside">
            Right Sidebar
          </Box>
        </Container>
      </Box> */}
    </>
  );
};

export default Root;
