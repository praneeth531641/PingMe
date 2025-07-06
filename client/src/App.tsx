import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import Chat from "./pages/Chat/Chat";
import { AuthProvider, useAuth } from "./context/AuthContext";
import type { ReactNode } from "react";

type PrivateRouteProps = {
  children: ReactNode;
};

type AppProps = {
  mode: "light" | "dark";
  toggleTheme: () => void;
};

function PrivateRoute({ children }: PrivateRouteProps) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

function App({ mode, toggleTheme }: AppProps) {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/chat"
            element={
              <PrivateRoute>
              <Chat mode={mode} toggleTheme={toggleTheme} />
            </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
