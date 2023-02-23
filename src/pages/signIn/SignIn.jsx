import React, { useState } from "react";
import "./SignIn.css";
import "../index.css";
import { useAuthContext } from "../../context/authContext";
import { registerUser, createUserDetails, loginUser } from "../../firebase/firebase-auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [showRegister, setShowRegister] = useState(false);
  const { signedUser } = useAuthContext();
  const navigate = useNavigate();

  //Regeister
  const register = async (e) => {
    e.preventDefault();
    const customer = {
      name: e.target.registerName.value,
      surname: e.target.registerSurname.value,
      email: e.target.registerEmail.value,
      phone: e.target.registerPhone.value,
      accessLevel: 0,
    };
    await registerUser(
      signedUser,
      e.target.registerEmail.value,
      e.target.registerPassword.value
    ).then((res) => {
      if (res) {
        createUserDetails("customers", customer, res.uid);
        navigate("/");
      }
    });
    e.target.reset();
  };

  //Login
  const login = async (e) => {
    e.preventDefault();
    await loginUser(signedUser, e.target.loginEmail.value, e.target.loginPassword.value).then(
      (res) => {
        if (res) navigate("/");
      }
    );
    e.target.reset();
  };

  return (
    <div className="sign-in-form">
      <div className="left-part">
        {showRegister ? (
          <form className="form" onSubmit={register}>
            <h2 className="title">Register</h2>
            <h4 className="subtitle">Create new account</h4>
            <input
              className="form-field"
              type="text"
              name="registerName"
              placeholder="Name"
              defaultValue={""}
              required
            />
            <input
              className="form-field"
              type="text"
              name="registerSurname"
              placeholder="Surname"
              defaultValue={""}
              required
            />
            <input
              className="form-field"
              type="text"
              name="registerPhone"
              placeholder="Phone"
              defaultValue={""}
              required
            />
            <input
              className="form-field"
              type="email"
              name="registerEmail"
              placeholder="Email"
              defaultValue={""}
              required
            />
            <input
              className="form-field"
              type="password"
              name="registerPassword"
              placeholder="Password"
              defaultValue={""}
              required
            />
            <p className="option" onClick={() => setShowRegister(false)}>
              Log in
            </p>
            <button className="" type="submit">
              Register
            </button>
          </form>
        ) : (
          <form className="form" onSubmit={login}>
            <h2 className="animation a1">LOG IN</h2>
            <h4 className="animation a2">Log in to your account using email and password</h4>
            <input
              className="form-field animation a3"
              type="email"
              name="loginEmail"
              placeholder="Email"
              defaultValue={""}
              required
            />
            <input
              className="form-field animation a4"
              type="password"
              name="loginPassword"
              placeholder="Password"
              defaultValue={""}
              required
            />
            <p className="option animation a5" onClick={() => setShowRegister(true)}>
              Don't have an account?
            </p>
            <button className="animation a6" type="submit">
              Login
            </button>
          </form>
        )}
      </div>
      <div className="right-part"></div>
    </div>
  );
};

export default SignIn;
