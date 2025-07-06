// import { useState } from "react";
// import { Box, useMediaQuery, type Theme } from "@mui/material";
// import ChatSidebar from "../../components/Chat/ChatSidebar/ChatSidebar";
// import ChatWindow from "../../components/Chat/ChatWindow/ChatWindow";
// import MessageInput from "../../components/Chat/MessageInput/MessageInput";
// import TopBar from "../../components/Layout/Topbar";

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };
// type ChatProps = {
//   mode: "light" | "dark";
//   toggleTheme: () => void;
// };
// type Message = {
//   id: number;
//   senderId: number;
//   content: string;
//   timestamp: string;
// };

// export default function Chat({ mode, toggleTheme }: ChatProps) {

//   const dummyCurrentUser: User = {
//     id: 1,
//     name: "Praneeth",
//     email: "praneeth@example.com",
//   };

//   const dummyUsers: User[] = [
//     dummyCurrentUser,
//     { id: 2, name: "Alice", email: "alice@example.com" },
//     { id: 3, name: "Bob", email: "bob@example.com" },
//   ];

//   const [selectedChatUser, setSelectedChatUser] = useState<User | null>(null);
//   const [messages, setMessages] = useState<Message[]>([]);

//   const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

//   const handleSendMessage = (text: string) => {
//     if (!selectedChatUser) return;

//     const newMessage: Message = {
//       id: messages.length + 1,
//       senderId: dummyCurrentUser.id,
//       content: text,
//       timestamp: new Date().toISOString(),
//     };

//     setMessages((prev) => [...prev, newMessage]);
//   };

//   const showSidebar = !isMobile || (isMobile && !selectedChatUser);
//   const showChatWindow = !isMobile || (isMobile && selectedChatUser);

//   return (
//     <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
//       {/* ✅ Top Bar at top of page */}
//       <TopBar userName={dummyCurrentUser.name} mode={mode} toggleTheme={toggleTheme} />

//       {/* ✅ Main chat layout */}
//       <Box sx={{ flex: 1, display: "flex", flexDirection: "row" }}>
//         {showSidebar && (
//           <ChatSidebar
//             users={dummyUsers}
//             currentUser={dummyCurrentUser}
//             onSelectUser={setSelectedChatUser}
//             selectedChatUser={selectedChatUser}
//           />
//         )}

//         {showChatWindow && selectedChatUser && (
//           <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
//             <Box sx={{ flex: 1, overflowY: "auto" }}>
//               <ChatWindow
//                 selectedUser={selectedChatUser}
//                 currentUserId={dummyCurrentUser.id}
//                 messages={messages}
//                 onBack={() => setSelectedChatUser(null)} // ✅ Show sidebar again on mobile
//               />
//             </Box>
//             <MessageInput onSend={handleSendMessage} />
//           </Box>
//         )}
//       </Box>
//     </Box>
//   );
// }
import { useState } from "react";
import { Box, useMediaQuery, type Theme } from "@mui/material";
import ChatSidebar from "../../components/Chat/ChatSidebar/ChatSidebar";
import ChatWindow from "../../components/Chat/ChatWindow/ChatWindow";
import MessageInput from "../../components/Chat/MessageInput/MessageInput";
import TopBar from "../../components/Layout/Topbar";

type User = {
  id: number;
  name: string;
  email: string;
};

type Message = {
  id: number;
  senderId: number;
  content: string;
  timestamp: string;
};

type ChatProps = {
  mode: "light" | "dark";
  toggleTheme: () => void;
};

export default function Chat({ mode, toggleTheme }: ChatProps) {
  const dummyCurrentUser: User = {
    id: 1,
    name: "Praneeth",
    email: "praneeth@example.com",
  };

  const dummyUsers: User[] = [
    dummyCurrentUser,
    { id: 2, name: "Alice", email: "alice@example.com" },
    { id: 3, name: "Bob", email: "bob@example.com" },
  ];

  const dummyMessagesMap: Record<number, Message[]> = {
    2: [
      {
        id: 1,
        senderId: 1,
        content: "Hey Alice!",
        timestamp: new Date().toISOString(),
      },
      {
        id: 2,
        senderId: 2,
        content: "Hi Praneeth, how are you?",
        timestamp: new Date().toISOString(),
      },
    ],
    3: [
      {
        id: 1,
        senderId: 1,
        content: "Hello Bob!",
        timestamp: new Date().toISOString(),
      },
      {
        id: 2,
        senderId: 3,
        content: "Hey, what's up?",
        timestamp: new Date().toISOString(),
      },
    ],
  };

  const [selectedChatUser, setSelectedChatUser] = useState<User | null>(null);
  const [messagesMap, setMessagesMap] = useState(dummyMessagesMap);

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const handleSendMessage = (text: string) => {
    if (!selectedChatUser) return;

    const newMessage: Message = {
      id: (messagesMap[selectedChatUser.id]?.length ?? 0) + 1,
      senderId: dummyCurrentUser.id,
      content: text,
      timestamp: new Date().toISOString(),
    };

    setMessagesMap((prev) => ({
      ...prev,
      [selectedChatUser.id]: [...(prev[selectedChatUser.id] || []), newMessage],
    }));
  };

  const showSidebar = !isMobile || (isMobile && !selectedChatUser);
  const showChatWindow = !isMobile || (isMobile && selectedChatUser);

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <TopBar
        userName={dummyCurrentUser.name}
        mode={mode}
        toggleTheme={toggleTheme}
      />

      <Box sx={{ flex: 1, display: "flex", flexDirection: "row" }}>
        {showSidebar && (
          <ChatSidebar
            users={dummyUsers}
            currentUser={dummyCurrentUser}
            onSelectUser={setSelectedChatUser}
            selectedChatUser={selectedChatUser}
          />
        )}

        {showChatWindow && selectedChatUser && (
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <Box sx={{ flex: 1, overflowY: "auto" }}>
              <ChatWindow
                selectedUser={selectedChatUser}
                currentUserId={dummyCurrentUser.id}
                messages={messagesMap[selectedChatUser.id] || []}
                onBack={() => setSelectedChatUser(null)}
              />
            </Box>
            <MessageInput onSend={handleSendMessage} />
          </Box>
        )}
      </Box>
    </Box>
  );
}
