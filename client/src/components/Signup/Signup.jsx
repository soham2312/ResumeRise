import { React, useState } from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenterPassword, setReenterPassword] = useState("");

  return (
    <div className="signup">
      <h3>
        Resu<span className="blue">me</span>Rise
      </h3>

      <h2>Create your account here</h2>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Email</label>
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
        <div>
          <label>re-Enter Password</label>
          <input
            type="password"
            placeholder="re-Enter Password"
            value={reenterPassword}
            onChange={(e) => {
              setReenterPassword(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn-primary"
          onClick={console.log("signup")}
        >
          Login
        </button>
        <div className="msg">
          <p>Don't have an Account?</p>
          <Link exact="true" to="/Login" className="msg-link">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
