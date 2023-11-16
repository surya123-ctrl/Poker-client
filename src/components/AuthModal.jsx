import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const AuthModal = ({ setShowModal, setIsSignUp, isSignUp }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);
  let navigate = useNavigate();

  console.log(email, password, confirmPassword);
  const handleClick = () => {
    setShowModal(false);
  };
  // const isSignUp = true;
  // sds
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp && password !== confirmPassword) {
        setError("Password need to match");
        return;
      }
      const response = await axios.post("http://localhost:8000/signup", {
        email,
        password,
      });
      setCookie("Email", response.data.email);
      setCookie("userId", response.data.userId);
      setCookie("AuthToken", response.data.token);
      const success = response.status === 201;
      if (success) navigate("/onboarding");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="auth-modal">
      <div onClick={handleClick} className="close-icon">
        &#x2715;
      </div>
      <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
      <p>
        By clicking Log In, you agree to our terms. Learn how we process your
        data in our Privacy Policy and Cookie Policy.
      </p>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp && (
          <input
            type="password-check"
            id="password-check"
            name="password-check"
            placeholder="Confirm Password"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <input className="secondary-button" type="submit" />
        <p>{error}</p>
      </form>
      <hr />
      <h2>GET THE APP</h2>
      Auth Modal
    </div>
  );
};

export default AuthModal;
