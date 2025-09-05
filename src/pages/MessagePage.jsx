import BlueNavBar from "@/components/BlueNavBar";
import ProfileAvatar from "@/components/ProfileAvatar";
import React from "react";
import { useState } from "react";

const conversations = [
  {
    id: 1,
    name: "Alice",
    profile:
      "https://plus.unsplash.com/premium_photo-1666264200737-acad542a92ff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVtYWxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    messages: [
      {
        id: 1,
        text: "Hi, I saw your project on building a task manager with React. Is it still open for contributors?",
        sender: "Alice",
        time: "10:00 AM",
      },
      {
        id: 2,
        text: "Hey Alice! Yes, we’re still looking for frontend devs.",
        sender: "Me",
        time: "10:02 AM",
      },
      {
        id: 3,
        text: "Great! I’m comfortable with React and TailwindCSS.",
        sender: "Alice",
        time: "10:05 AM",
      },
      {
        id: 4,
        text: "Perfect, we’re currently setting up authentication. Do you want to take that task?",
        sender: "Me",
        time: "10:07 AM",
      },
      {
        id: 5,
        text: "Sure, I’ll get started tonight.",
        sender: "Alice",
        time: "10:10 AM",
      },
    ],
  },
  {
    id: 2,
    name: "Nana",
    profile:
      "https://images.unsplash.com/photo-1588820502373-625223afa4ce?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbGUlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    messages: [
      {
        id: 1,
        text: "I’m working on the API for user roles, but I’m not sure how to handle permissions.",
        sender: "Me",
        time: "2:15 PM",
      },
      {
        id: 2,
        text: "Good question. We’ll use role-based access: admin, contributor, and viewer.",
        sender: "Kwame",
        time: "2:17 PM",
      },
      {
        id: 3,
        text: "So, admins can add/remove users, contributors can edit code, and viewers only read?",
        sender: "Me",
        time: "2:18 PM",
      },
      {
        id: 4,
        text: "Exactly 👍. Document it in the README once done.",
        sender: "Kwame",
        time: "2:20 PM",
      },
      { id: 5, text: "Got it, thanks!", sender: "Me", time: "2:21 PM" },
    ],
  },
  {
    id: 3,
    name: "Maya",
    profile:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmVtYWxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    messages: [
      {
        id: 1,
        text: "Should we use Firebase or MongoDB for this project?",
        sender: "Maya",
        time: "9:30 AM",
      },
      {
        id: 2,
        text: "I think MongoDB fits better since we’ll have complex relationships.",
        sender: "Me",
        time: "9:32 AM",
      },
      {
        id: 3,
        text: "True. Plus, it’s easier to scale later.",
        sender: "Maya",
        time: "9:35 AM",
      },
      {
        id: 4,
        text: "Yeah, and we can host it on Atlas for free at the start.",
        sender: "Me",
        time: "9:36 AM",
      },
      { id: 5, text: "Okay, MongoDB it is!", sender: "Maya", time: "9:38 AM" },
    ],
  },
  {
    id: 4,
    name: "Esi",
    profile:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZlbWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww",
    messages: [
      {
        id: 1,
        text: "Can we set up a quick sync call tomorrow?",
        sender: "Esi",
        time: "6:00 PM",
      },
      {
        id: 2,
        text: "Works for me after 7 PM.",
        sender: "Me",
        time: "6:05 PM",
      },
      { id: 3, text: "I’m good at 7 too.", sender: "Esi", time: "6:06 PM" },
      {
        id: 4,
        text: "Same here. Let’s do it on Google Meet?",
        sender: "Me",
        time: "6:07 PM",
      },
      {
        id: 5,
        text: "Perfect. Dropping the link here: meet.google.com/abc-123",
        sender: "Esi",
        time: "6:10 PM",
      },
      {
        id: 6,
        text: "Thanks! See you tomorrow.",
        sender: "Me",
        time: "6:12 PM",
      },
    ],
  },
  {
    id: 5,
    name: "Kwesi",
    profile:
      "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbGUlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    messages: [
      {
        id: 1,
        text: "I pushed my first PR for the login page.",
        sender: "Kwesi",
        time: "11:00 AM",
      },
      {
        id: 2,
        text: "I reviewed it. Looks good, but could you refactor the form validation?",
        sender: "Me",
        time: "11:05 AM",
      },
      {
        id: 3,
        text: "Sure, I’ll clean that up tonight.",
        sender: "Kwesi",
        time: "11:07 AM",
      },
      {
        id: 4,
        text: "Also, remember to add unit tests.",
        sender: "Me",
        time: "11:10 AM",
      },
      {
        id: 5,
        text: "Right, will do. Thanks for the feedback!",
        sender: "Kwesi",
        time: "11:12 AM",
      },
      { id: 6, text: "Anytime 🙂", sender: "Me", time: "11:15 AM" },
    ],
  },
];

function MessagePage() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim() || !selectedChat) return;

    const newMessage = {
      id: Date.now(),
      text: input,
      sender: "Me",
    };

    // Update selected chat messages
    setSelectedChat({
      ...selectedChat,
      messages: [...selectedChat.messages, newMessage],
    });

    // Reset input
    setInput("");
  };
  return (
    <div>
      <BlueNavBar />
      <section className=" w-full" style={{ height: "calc(100vh - 5rem)" }}>
        <div className="flex h-full max-w-5xl mx-auto border rounded-lg shadow-lg">
          {/* Conversations List */}
          <div
            className={`w-full md:w-1/3 border-r bg-gray-100 overflow-y-auto
        ${selectedChat ? "hidden md:block" : "block"}`}
          >
            <h2 className="p-4 font-bold text-lg border-b">Conversations</h2>
            {conversations.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat)}
                className={`p-4 cursor-pointer hover:bg-slate-200 ${
                  selectedChat?.id === chat.id ? "bg-gray-300" : ""
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{chat.name}</p>
                    <p className="text-sm text-slate-600 truncate">
                      {chat.messages[chat.messages.length - 1].text}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 items-center justify-between">
                    {chat.messages[chat.messages.length - 1].read ? (
                      ""
                    ) : chat.messages[chat.messages.length - 1].sender !=
                      "Me" ? (
                      <div className="bg-green-600 w-3 h-3 rounded-full"></div>
                    ) : (
                      ""
                    )}
                    <p className="text-gray-500 text-xs">
                      {chat.messages[chat.messages.length - 1].time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chat Details */}
          <div
            className={`w-full md:w-2/3 border-r bg-gray-100 overflow-y-auto
        ${selectedChat ? "block" : "hidden md:flex"}`}
          >
            {selectedChat ? (
              <>
                {/* Header */}
                <div className="p-4 border-b font-bold bg-white flex items-center gap-4">
                  <button
                    onClick={() => setSelectedChat(null)}
                    className="md:hidden mr-2 text-blue-500"
                  >
                    ← Back
                  </button>
                  <ProfileAvatar image={selectedChat.profile} />
                  <p>{selectedChat.name}</p>
                </div>

                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                  {selectedChat.messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`mb-2 p-2 rounded-lg max-w-xs ${
                        msg.sender === "Me"
                          ? "bg-blue-500 text-white ml-auto"
                          : "bg-slate-200 text-black mr-auto"
                      }`}
                    >
                      <div>{msg.text}</div>
                      <div
                        className={`text-xs ${
                          msg.sender === "Me"
                            ? "text-slate-100"
                            : "text-slate-500"
                        } mt-1 text-right`}
                      >
                        {msg.time}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input Box */}
                <div className="flex p-2 border-t bg-white">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type a message..."
                    className="flex-1 border rounded-lg p-2 mr-2 focus:outline-none"
                  />
                  <button
                    onClick={handleSend}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  >
                    Send
                  </button>
                </div>
              </>
            ) : (
              <div className="hidden md:flex items-center justify-center flex-1 text-gray-500">
                Select a conversation to view messages
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default MessagePage;
