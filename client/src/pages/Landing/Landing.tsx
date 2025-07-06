import { Box, Button, Typography, Container, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f0f4f8",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Typography variant="h3" gutterBottom fontWeight={700}>
          Welcome to PingMe 💬
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: "#555" }}>
          A fast, secure, and modern chat application built for real-time
          communication. Start chatting with your friends and team instantly.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button variant="outlined" onClick={() => navigate("/register")}>
            Register
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
