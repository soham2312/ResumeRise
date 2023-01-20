import React from "react";
import "./Home.scss";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("RESUME BUILDER FOR YOUR NEW JOB")
            .pauseFor(1000)
            .deleteAll()
            .typeString("GET YOUR FREE RESUME HERE")
            .pauseFor(1000)
            .deleteAll()
            .typeString("RESUME BUILDER FOR YOUR NEW JOB")
            .start();
        }}
      />
    </div>
  );
};

export default Home;
