import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Registration Error:", error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
      <button onClick={register}>Sign Up</button>
    </div>
  );
}