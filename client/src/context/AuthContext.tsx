// import {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   useCallback,
//   type ReactNode,
// } from "react";
// import axios from "axios";

// // ✅ Define User type
// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// // ✅ Define context value type
// type AuthContextType = {
//   user: User | null;
//   login: (user: User) => void;
//   logout: () => void;
// };

// // ✅ Create context
// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // ✅ Provider Props
// type AuthProviderProps = {
//   children: ReactNode;
// };

// export const AuthProvider = ({ children }: AuthProviderProps) => {
//   const [user, setUser] = useState<User | null>(null);

//   const login = (userData: User) => setUser(userData);

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("token");
//   };

//   const checkUser = useCallback(async () => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     try {
//       const { data } = await axios.get<User>("http://localhost:5000/api/user/me", {
//         headers: { Authorization: token },
//       });
//       setUser(data);
//     } catch {
//       logout();
//     }
//   }, [logout]);

//   useEffect(() => {
//     checkUser();
//   }, [checkUser]);

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // ✅ Hook with safety
// // eslint-disable-next-line react-refresh/only-export-components
// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
// src/context/AuthContext.tsx
import { createContext, useContext, useState, type ReactNode } from "react";

export type User = {
  id: number;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (user: User) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
