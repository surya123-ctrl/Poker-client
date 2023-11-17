import React from "react";
import { useCookies } from "react-cookie";
import { CiLogout } from "react-icons/ci";
const ChatHeader = ({ user }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const logout = () => {
    removeCookie("UserId", cookies.UserId);
    removeCookie("AuthToken", cookies.AuthToken);
    window.location.reload();
  };
  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          <img src={user.url} alt={`pic of ${user.first_name}`} />
        </div>
        <h3>{user.first_name}</h3>
      </div>
      <CiLogout className="log-out-icon" onClick={logout} />
    </div>
  );
};

export default ChatHeader;
