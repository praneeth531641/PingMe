import {
  //Box,
  IconButton,
  InputBase,
  Paper,
  useTheme,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState, type FC, type FormEvent } from "react";

type MessageInputProps = {
  onSend: (message: string) => void;
};

const MessageInput: FC<MessageInputProps> = ({ onSend }) => {
  const [text, setText] = useState("");
  const theme = useTheme();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text.trim());
      setText("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      elevation={3}
      sx={{
        display: "flex",
        alignItems: "center",
        px: 2,
        py: 1,
        borderTop: `1px solid ${theme.palette.divider}`,
        bgcolor: theme.palette.background.paper,
      }}
    >
      <InputBase
        fullWidth
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{
          flex: 1,
          px: 1,
          fontSize: "1rem",
        }}
      />
      <IconButton type="submit" color="primary" disabled={!text.trim()}>
        <SendIcon />
      </IconButton>
    </Paper>
  );
};

export default MessageInput;
