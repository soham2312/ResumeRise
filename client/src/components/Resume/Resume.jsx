import { React } from "react";
import "./Resume.scss";
import { Link, Outlet } from "react-router-dom";

const Resume = () => {
  const submit = () => {
    console.log("submit button clicked");
  };
  return (
    <div className="resume">
      <h3>
        Resu<span className="blue">me</span>Rise
      </h3>
      <div className="resume-contents">
        <div className="resume-content-box">
          <div className="resume-content-box-heading">
            <Link to="/resume/basics">Basics</Link>
            <Link to="/resume/experience">Experience</Link>
            <Link to="/resume/location">Location</Link>
            <Link to="/resume/Skills">Skills</Link>
            <Link to="/resume/education">Education</Link>
            <Link to="/resume/projects">Projects</Link>
            <Link to="/resume/Awards">Awards</Link>
          </div>
          <Outlet />
          <button type="submit" className="btn-primary" onClick={submit}>
            Submit
          </button>
        </div>
        <div className="resume-preview">
          <h2>here we will show the resume</h2>
        </div>
      </div>
    </div>
  );
};

export default Resume;
