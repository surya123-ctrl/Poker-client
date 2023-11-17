// import React, { useState } from "react";
// import ChatHeader from "./ChatHeader";
// import MatchesDisplay from "./MatchesDisplay";
// import ChatDisplay from "./ChatDisplay";

// const ChatContainer = ({ user }) => {
//   const [clickedUser, setClickedUsers] = useState(null);
//   console.log("clickedUser", clickedUser);
//   return (
//     <div className="chat-container">
//       <ChatHeader user={user} />
//       <div className="">
//         <button className="option" onClick={() => setClickedUsers(null)}>
//           Matches
//         </button>
//         <button className="option" disabled={!clickedUser}>
//           Chat
//         </button>
//       </div>
//       {!clickedUser && (
//         <MatchesDisplay
//           matches={user.matches}
//           setClickedUsers={setClickedUsers}
//         />
//       )}
//       {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser} />}
//     </div>
//   );
// };

// export default ChatContainer;

import ChatHeader from "./ChatHeader";
import MatchesDisplay from "./MatchesDisplay";
import ChatDisplay from "./ChatDisplay";
import { useState } from "react";

const ChatContainer = ({ user }) => {
  const [clickedUser, setClickedUser] = useState(null);

  return (
    <div className="chat-container">
      <ChatHeader user={user} />

      <div>
        <button className="option" onClick={() => setClickedUser(null)}>
          Matches
        </button>
        <button className="option" disabled={!clickedUser}>
          Chat
        </button>
      </div>

      {!clickedUser && (
        <MatchesDisplay
          matches={user.matches}
          setClickedUser={setClickedUser}
        />
      )}

      {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser} />}
    </div>
  );
};

export default ChatContainer;
