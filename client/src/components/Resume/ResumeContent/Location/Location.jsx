import { React, useState } from "react";
import "./Location.scss";
import { Link } from "react-router-dom";

const Location = () => {
  const [address, setAddress] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");

  return (
    <div className="basic">
      <form>
        <div>
          <label>Address</label>
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={address}
            required
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Postal Code</label>
          <input
            type="text"
            placeholder="postal"
            name="postal"
            value={postal}
            required
            onChange={(e) => {
              setPostal(e.target.value);
            }}
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={city}
            required
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Region</label>
          <input
            type="text"
            placeholder="Region"
            name="Region"
            value={region}
            required
            onChange={(e) => {
              setRegion(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Location;
