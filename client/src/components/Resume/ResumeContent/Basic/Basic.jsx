import { React, useState } from "react";
import "./Basic.scss";

const Basic = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [website, setWebsite] = useState("");

  return (
    <div className="basic">
      <form>
        <div>
          <label>Name</label>
          <input
            type="name"
            placeholder="name"
            name="name"
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="number"
            placeholder="3924823094"
            name="number"
            value={number}
            required
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Website</label>
          <input
            type="text"
            placeholder="user.com"
            name="website"
            value={website}
            required
            onChange={(e) => {
              setWebsite(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Basic;
