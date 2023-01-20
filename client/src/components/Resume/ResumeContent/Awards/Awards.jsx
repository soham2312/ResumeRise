import React from "react";
import "./Awards.scss";
import { useState } from "react";
// import Latex from "react-latex";
// import Katex from "react-katex";

const Awards = () => {
  const [firstAward, setFirstAward] = useState("");
  const [secondAward, setSecondAward] = useState("");

  return (
    <div className="awards">
      <form>
        <div>
          <label>First Award</label>
          <input
            type="text"
            placeholder="First Award"
            name="First Award"
            value={firstAward}
            required
            onChange={(e) => {
              setFirstAward(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Second Award</label>
          <input
            type="text"
            placeholder="Second Award"
            name="secondAward"
            value={secondAward}
            required
            onChange={(e) => {
              setSecondAward(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Awards;
