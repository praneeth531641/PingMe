import {
   // Box,
    IconButton,
    InputBase,
    Paper,
    useTheme,
    useMediaQuery,
  } from "@mui/material";
  import SendIcon from "@mui/icons-material/Send";
  import { useState, type FC, type FormEvent } from "react";
  
  type MessageInputProps = {
    onSend: (message: string) => void;
  };
  
  const MessageInput: FC<MessageInputProps> = ({ onSend }) => {
    const [text, setText] = useState("");
    const theme = useTheme();
    const isMobile = useMediaQuery("(max-width:600px)");
  
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
          px: isMobile ? 1 : 2,
          py: 1,
          width: "100%",
          borderTop: `1px solid ${theme.palette.divider}`,
          bgcolor: theme.palette.background.paper,
          position: "relative",
          bottom: 0,
        }}
      >
        <InputBase
          fullWidth
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          sx={{
            fontSize: isMobile ? "0.9rem" : "1rem",
            px: 1,
            py: 0.5,
          }}
          inputProps={{ "aria-label": "Type a message" }}
        />
        <IconButton
          type="submit"
          color="primary"
          sx={{
            ml: 1,
            p: isMobile ? "6px" : "10px",
          }}
          disabled={!text.trim()}
          aria-label="Send message"
        >
          <SendIcon />
        </IconButton>
      </Paper>
    );
  };
  
  export default MessageInput;
  