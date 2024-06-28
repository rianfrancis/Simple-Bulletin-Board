import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h3"
              noWrap
              component="a"
              href="/home"
              sx={{
                fontFamily: "montserrat",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Simple Bulletin Board
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
