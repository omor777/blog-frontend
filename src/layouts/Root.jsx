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
      <Box>
        <Box bgcolor="red" component="header">
          <Container maxWidth="xl">
            <Navbar />
          </Container>
        </Box>
        <Container
          maxWidth="xl"
          sx={{
            display: "grid",
            gridTemplateColumns: "12",
            gap: 2,
            // gridTemplateRows: "auto 1fr",
            height: "100vh",
          }}
        >
          <Box bgcolor={"blue"} gridColumn="1 / span 2" component="aside">
            Left side bar
          </Box>
          <Box bgcolor="green" gridColumn="3 / span 8" component="main">
            Main
          </Box>
          <Box bgcolor={"purple"} gridColumn=" 11 / span 2" component="aside">
            Right Sidebar
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Root;
