// import { useState, type FormEvent, type ChangeEvent, useEffect } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   TextField,
//   Typography,
//   Paper,
//   CircularProgress,
// } from "@mui/material";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../../context/AuthContext";

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();
//   const { login, user } = useAuth();

//   // Redirect if already logged in
//   useEffect(() => {
//     if (user) navigate("/chat");
//   }, [user, navigate]);

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const { data } = await axios.post<{ token: string; user: User }>(
//         "http://localhost:5000/api/auth/login",
//         { email, password }
//       );
//       localStorage.setItem("token", data.token);
//       login(data.user);
//     } catch (err: unknown) {
//       if (axios.isAxiosError(err)) {
//         alert(err.response?.data?.msg || "Login failed");
//       } else {
//         alert("Unexpected error");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container maxWidth="xs">
//       <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
//         <Typography variant="h5" align="center" gutterBottom>
//           Login to PingMe
//         </Typography>

//         <Box component="form" onSubmit={handleSubmit} noValidate>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             label="Email"
//             type="email"
//             value={email}
//             onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             label="Password"
//             type="password"
//             value={password}
//             onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 2 }}
//             disabled={loading}
//             startIcon={loading ? <CircularProgress size={20} /> : null}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </Button>
//         </Box>
//       </Paper>
//     </Container>
//   );
// }
import { useState, type FormEvent, type ChangeEvent, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

type User = {
  id: number;
  name: string;
  email: string;
};

// Dummy users list
const dummyUsers: User[] = [
  {
    id: 1,
    name: "Praneeth",
    email: "praneeth@example.com",
  },
  {
    id: 2,
    name: "Alice",
    email: "alice@example.com",
  },
];

const dummyPassword = "123456"; // Default password for dummy login

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login, user } = useAuth();

  useEffect(() => {
    if (user) navigate("/chat");
  }, [user, navigate]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate async login
    setTimeout(() => {
      const matchedUser = dummyUsers.find(
        (u) => u.email === email && password === dummyPassword
      );
      if (matchedUser) {
        localStorage.setItem("token", "dummy-token");
        login(matchedUser);
      } else {
        alert(
          "Invalid credentials. Try email: praneeth@example.com / password: 123456"
        );
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login to PingMe
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : null}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
