import React from "react";

const SignIn = () => {
  return (
    <div className="page-container">
      REGISTER
      <form action="">
        <input type="text" name="username" placeholder="Username" defaultValue={""} required />
        <input type="password" name="password" placeholder="Password" defaultValue={""} required />
        <button>Register</button>
      </form>
      LOGIN
      <form action="">
        <input type="text" name="username" placeholder="Username" defaultValue={""} required />
        <input type="password" name="password" placeholder="Password" defaultValue={""} required />
        <button>Login</button>
      </form>
    </div>
  );
};

export default SignIn;
