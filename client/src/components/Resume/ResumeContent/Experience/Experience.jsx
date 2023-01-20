import { React, useState } from "react";
import "./Experience.scss";

const Experience = () => {
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="basic">
      <form>
        <div>
          <label>Position</label>
          <input
            type="text"
            placeholder="position"
            name="position"
            value={position}
            required
            onChange={(e) => {
              setPosition(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            required
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Start Date</label>
          <input
            type="text"
            placeholder="Dec 2021"
            name="startDate"
            value={startDate}
            required
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          />
        </div>
        <div>
          <label>End Date</label>
          <input
            type="text"
            placeholder="July 2025"
            name="endDate"
            value={endDate}
            required
            onChange={(e) => {
              setEndDate(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Experience;
