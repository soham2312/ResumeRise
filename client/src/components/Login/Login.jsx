import { React, useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <h3>
        Resu<span className="blue">me</span>Rise
      </h3>

      <h2>Login here</h2>
      <form>
        <div>
          <label>Username</label>
          <input
            type="email"
            placeholder="e-mail"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn-primary"
          onClick={console.log("login")}
        >
          Login
        </button>
        <div className="msg">
          <p>Don't have an Account?</p>
          <Link exact="true" to="/Signup" className="msg-link">
            SignUp
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
