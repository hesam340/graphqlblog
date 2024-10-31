import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h5" component="h1" fontWeight="700" flex={1}>
            وبلاگ بوتو استارت
          </Typography>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <BookIcon />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
