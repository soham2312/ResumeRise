import React, { useEffect } from "react";
import "./Awards.scss";
import { useState } from "react";
import useStore from "../../../../zustand/resumeStore.js";
// import Latex from "react-latex";
// import Katex from "react-katex";

const Awards = () => {
  const [firstAward, setFirstAward] = useState("");
  const [secondAward, setSecondAward] = useState("");
  const changeAward = useStore((state)=>state.changeAward);
  const setFirst = function (val) {
    setFirstAward(val);
    changeAward();
  }

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
              // setFirstAward(e.target.value);
              setFirst(e.target.value);
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
