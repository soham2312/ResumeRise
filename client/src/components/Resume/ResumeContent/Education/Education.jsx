import React, { cloneElement } from "react";
import "./Education.scss";
import { useState } from "react";

const Education = () => {
  const [college, setCollege] = useState("");
  const [collegeLocation, setCollegeLocation] = useState("");
  const [degree, setDegree] = useState("");
  const [major, setMajor] = useState("");
  const [startDateCol, setStartDateCol] = useState("");
  const [endDateCol, setEndDateCol] = useState("");

  return (
    <div className="basic">
      <form>
        <div>
          <label>College</label>
          <input
            type="text"
            placeholder="IIIT Jabalpur"
            name="college"
            value={college}
            required
            onChange={(e) => {
              setCollege(e.target.value);
            }}
          />
        </div>
        <div>
          <label>College Location</label>
          <input
            type="text"
            placeholder="Jabalpur, MP"
            name="collegeLocation"
            value={collegeLocation}
            required
            onChange={(e) => {
              setCollegeLocation(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Degree</label>
          <input
            type="text"
            placeholder="B.Tech"
            name="degree"
            value={degree}
            required
            onChange={(e) => {
              setDegree(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Major</label>
          <input
            type="text"
            placeholder="Computer Science"
            name="major"
            value={major}
            required
            onChange={(e) => {
              setMajor(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Start Date</label>
          <input
            type="text"
            placeholder="Dec 2021"
            name="startDateCol"
            value={startDateCol}
            required
            onChange={(e) => {
              setStartDateCol(e.target.value);
            }}
          />
        </div>
        <div>
          <label>End Date</label>
          <input
            type="text"
            placeholder="July 2025"
            name="endDateCol"
            value={endDateCol}
            required
            onChange={(e) => {
              setEndDateCol(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Education;
