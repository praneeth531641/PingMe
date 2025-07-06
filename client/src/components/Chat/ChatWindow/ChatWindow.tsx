import {
  Box,
  Typography,
  Paper,
  Stack,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import type { FC } from "react";

type User = {
  id: number;
  name: string;
};

type Message = {
  id: number;
  senderId: number;
  content: string;
  timestamp: string;
};

type ChatWindowProps = {
  selectedUser: User;
  currentUserId: number;
  messages: Message[];
  onBack?: () => void; // ✅ optional callback
};

const ChatWindow: FC<ChatWindowProps> = ({
  selectedUser,
  currentUserId,
  messages,
  onBack,
}) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Header with Back on Mobile */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          px: 2,
          py: 1,
          borderBottom: "1px solid #ddd",
          bgcolor: "#f0f0f0",
        }}
      >
        {isMobile && onBack && (
          <IconButton onClick={onBack} sx={{ mr: 1 }}>
            <ArrowBackIcon />
          </IconButton>
        )}
        <Typography variant="h6">
           {selectedUser.name}
        </Typography>
      </Box>

      {/* Message Area */}
      <Box
        sx={{
          flex: 1,
          p: 3,
          overflowY: "auto",
          bgcolor: "#f5f5f5",
        }}
      >
        <Stack spacing={2}>
          {messages.map((msg) => {
            const isMe = msg.senderId === currentUserId;
            return (
              <Box
                key={msg.id}
                sx={{
                  display: "flex",
                  justifyContent: isMe ? "flex-end" : "flex-start",
                }}
              >
                <Paper
                  sx={{
                    px: 2,
                    py: 1,
                    maxWidth: "70%",
                    bgcolor: isMe ? "#1976d2" : "#e0e0e0",
                    color: isMe ? "#fff" : "#000",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="body2">{msg.content}</Typography>
                </Paper>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default ChatWindow;
