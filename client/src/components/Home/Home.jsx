import React from "react";
import "./Home.scss";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Home = () => {
  let login = false;
  return (
    <div className="home">
      <h3>
        Resu<span className="blue">me</span>Rise
      </h3>

      <div className="hero">
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("GET YOUR PROFESSIONAL RESUME")
                .pauseFor(500)
                .deleteAll()
                .typeString("WITH THE HIGHEST RESUME SCORE USING LATEX")
                .pauseFor(500)
                .deleteAll()
                .typeString("GET YOUR PROFESSIONAL RESUME")
                .deleteAll()
                .typeString("WITH THE HIGHEST RESUME SCORE USING LATEX")
                .pauseFor(500)
                .deleteAll()
                .typeString("GET YOUR PROFESSIONAL RESUME")
                .start();
            }}
          />
        </h1>
        <Link exact="true" to="/login" className="btn-primary">
          {login ? "START MAKING" : "Login"}
        </Link>
      </div>
    </div>
  );
};

export default Home;
