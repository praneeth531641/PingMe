import {
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Typography,
    Divider,
  } from "@mui/material";
  import { type ElementType, type FC } from "react";
  
  type User = {
    id: number;
    name: string;
    email: string;
    profile_pic?: string;
  };
  
  type ChatSidebarProps = {
    users: User[];
    currentUser: User | null;
    onSelectUser: (user: User) => void;
    selectedChatUser: User | null;
    isVisible?: boolean; // ✅ optional prop
  };
  
  const ChatSidebar: FC<ChatSidebarProps> = ({
    users,
    currentUser,
    onSelectUser,
    selectedChatUser,
    isVisible = true,
  }) => {
    const filteredUsers = users.filter((u) => u.id !== currentUser?.id);
  
    if (!isVisible) return null;
  
    return (
      <Box
        sx={{
          width: { xs: "100%", sm: 300 },
          p: 2,
          overflowY: "auto",
          borderRight: { sm: "1px solid #ddd" },
          bgcolor: "#f9f9f9",
          height: "100vh",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Chats
        </Typography>
        <Divider />
        <List>
          {filteredUsers.map((user) => (
            <ListItem
              key={user.id}
              button
              component={"li" as ElementType}
              selected={selectedChatUser?.id === user.id}
              onClick={() => onSelectUser(user)}
            >
              <ListItemAvatar>
                <Avatar src={user.profile_pic}>
                  {user.name.charAt(0).toUpperCase()}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={user.name}
                secondary={user.email}
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };
  
  export default ChatSidebar;
  