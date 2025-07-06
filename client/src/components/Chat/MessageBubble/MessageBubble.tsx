// MessageBubble.tsx
import { Box, Typography, Paper } from "@mui/material";
import type { FC } from "react";

type MessageProps = {
  message: string;
  sender: boolean;
  timestamp: string;
};

const MessageBubble: FC<MessageProps> = ({ message, sender, timestamp }) => {
  return (
    <Box
      display="flex"
      justifyContent={sender ? "flex-end" : "flex-start"}
      mb={1}
    >
      <Paper
        elevation={2}
        sx={{
          p: 1.5,
          maxWidth: "70%",
          bgcolor: sender ? "#dcf8c6" : "#fff",
        }}
      >
        <Typography variant="body1">{message}</Typography>
        <Typography variant="caption" sx={{ float: "right", mt: 0.5 }}>
          {timestamp}
        </Typography>
      </Paper>
    </Box>
  );
};

export default MessageBubble;
