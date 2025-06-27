// src/components/ForgotPassword.jsx
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/config";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert("✅ Password reset email sent!");
    } catch (error) {
      alert("❌ Error: " + error.message);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <input
        type="email"
        placeholder="Enter your registered email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleForgotPassword}>Send Reset Email</button>
    </div>
  );
}

export default ForgotPassword;
