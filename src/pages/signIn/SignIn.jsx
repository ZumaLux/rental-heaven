import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const SignIn = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) setUser(currentUser);
      else {
        setUser(null);
      }
    });
  }, []);

  //Regeister
  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      e.target.reset();
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };

  //Login
  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      e.target.reset();
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };

  //Logout
  const logout = async () => {
    if (!user) return;
    else {
      await signOut(auth);
      console.log("Signed Out!");
      console.log(user);
    }
  };

  return (
    <div className="page-container">
      REGISTER
      <form onSubmit={register}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          defaultValue={""}
          required
          onChange={(event) => setRegisterEmail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          defaultValue={""}
          required
          onChange={(event) => setRegisterPassword(event.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      LOGIN
      <form onSubmit={login}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          defaultValue={""}
          required
          onChange={(event) => setLoginEmail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          defaultValue={""}
          required
          onChange={(event) => setLoginPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <h1>Current User: {user?.email}</h1>
      <button onClick={() => logout()}>Sign Out</button>
    </div>
  );
};

export default SignIn;
