// import React, { useState } from "react";
// import axios from "axios";
// const ChatInput = ({
//   user,
//   clickedUser,
//   getUsersMessages,
//   getClickedUsersMessages,
// }) => {
//   const [textArea, setTextArea] = useState(null);
//   const userId = user?.user_id;
//   const clickedUserId = clickedUser?.user_id;

//   const addMessages = async () => {
//     const message = {
//       timestamp: new Date().toISOString(),
//       form_userId: userId,
//       to_userId: clickedUserId,
//       message: textArea,
//     };
//     try {
//       await axios.post("https://localhost:8000/messages", {
//         message,
//       });
//       getUsersMessages();
//       getClickedUsersMessages();
//       setTextArea("");
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div className="chat-input">
//       <textarea
//         value={textArea}
//         onChange={(e) => setTextArea(e.target.value)}
//       />
//       <button className="secondary-button" onClick={addMessages}>
//         Submit
//       </button>
//     </div>
//   );
// };

// export default ChatInput;

import { useState } from "react";
import axios from "axios";

const ChatInput = ({
  user,
  clickedUser,
  getUserMessages,
  getClickedUsersMessages,
}) => {
  const [textArea, setTextArea] = useState("");
  const userId = user?.user_id;
  const clickedUserId = clickedUser?.user_id;

  const addMessage = async () => {
    const message = {
      timestamp: new Date().toISOString(),
      from_userId: userId,
      to_userId: clickedUserId,
      message: textArea,
    };

    try {
      await axios.post(
        "https://poker-server-i90xis3w6-surya123-ctrl.vercel.app/",
        { message }
      );
      getUserMessages();
      getClickedUsersMessages();
      setTextArea("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chat-input">
      <textarea
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      />
      <button className="secondary-button" onClick={addMessage}>
        Submit
      </button>
    </div>
  );
};

export default ChatInput;
