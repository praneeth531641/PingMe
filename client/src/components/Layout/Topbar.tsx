// // src/components/Layout/TopBar.tsx
// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     IconButton,
//     Menu,
//     MenuItem,
//     Avatar,
//     Badge,
//     useTheme,
//     Tooltip,
//     Box,
//   } from "@mui/material";
//   import {
//     Brightness4 as DarkModeIcon,
//     Brightness7 as LightModeIcon,
//     Notifications as NotificationsIcon,
//   } from "@mui/icons-material";
//   import { useState, type MouseEvent } from "react";
  
//   type TopBarProps = {
//     userName: string;
//     mode: "light" | "dark";
//     toggleTheme: () => void;
//   };
  
//   export default function TopBar({ userName, mode, toggleTheme }: TopBarProps) {
//     const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//     const theme = useTheme();
  
//     const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
//       setAnchorEl(event.currentTarget);
//     };
  
//     const handleCloseMenu = () => {
//       setAnchorEl(null);
//     };
  
//     return (
//       <AppBar position="sticky" color="default" elevation={1}>
//         <Toolbar sx={{ justifyContent: "space-between" }}>
//           {/* Brand Title */}
//           <Typography variant="h6" fontWeight={600}>
//              PingmeApp
//           </Typography>
  
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//             {/* Notifications */}
//             <Tooltip title="Notifications">
//               <IconButton>
//                 <Badge badgeContent={2} color="error">
//                   <NotificationsIcon />
//                 </Badge>
//               </IconButton>
//             </Tooltip>
  
//             {/* Theme Toggle */}
//             <Tooltip title="Toggle Theme">
//               <IconButton onClick={toggleTheme} color="inherit">
//                 {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
//               </IconButton>
//             </Tooltip>
  
//             {/* User Menu */}
//             <IconButton onClick={handleOpenMenu}>
//               <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
//                 {userName.charAt(0).toUpperCase()}
//               </Avatar>
//             </IconButton>
  
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleCloseMenu}
//               anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//               transformOrigin={{ vertical: "top", horizontal: "right" }}
//             >
//               <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
//               <MenuItem onClick={handleCloseMenu}>Settings</MenuItem>
//               <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
//             </Menu>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     );
//   }
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Avatar,
    Tooltip,
  } from "@mui/material";
  import { useState, type FC, type MouseEvent } from "react";
  import { Brightness4, Brightness7, Logout } from "@mui/icons-material";
  
  type TopBarProps = {
    userName: string;
    mode: "light" | "dark";
    toggleTheme: () => void;
  };
  
  const TopBar: FC<TopBarProps> = ({ userName, mode, toggleTheme }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
  
    const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
  
    const handleLogout = () => {
      localStorage.removeItem("token");
      location.href = "/login";
    };
  
    return (
      <AppBar position="static" sx={{ bgcolor: mode === "dark" ? "#333" : "#1976d2" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            🔥 PingMe
          </Typography>
  
          <Box>
            <Tooltip title="Settings">
              <IconButton onClick={handleMenuOpen} color="inherit">
                <Avatar>{userName.charAt(0)}</Avatar>
              </IconButton>
            </Tooltip>
  
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              onClick={handleMenuClose}
              PaperProps={{
                elevation: 4,
                sx: {
                  mt: 1.5,
                  minWidth: 160,
                },
              }}
            >
              <MenuItem onClick={toggleTheme}>
                <IconButton size="small" color="inherit">
                  {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
                <Typography variant="inherit" ml={1}>
                  Toggle Theme
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <IconButton size="small" color="inherit">
                  <Logout />
                </IconButton>
                <Typography variant="inherit" ml={1}>
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default TopBar;
  