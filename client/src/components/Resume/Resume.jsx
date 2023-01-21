import { React } from "react";
import "./Resume.scss";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const Resume = () => {
  const submit = async() => {
    // const formData = {}
    // const pdfResponse = await fetch('http://localhost:8181/api/generate-pdf', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(formData)
    // })
  
    // const pdfBlob = await pdfResponse.blob()
    // const pdfUrl = URL.createObjectURL(pdfBlob)
    // console.log(pdfUrl, "shiv");
    // return pdfUrl
  };

  return (
    <div className="resume">
      <h3>
        Resu<span className="blue">me</span>Rise
      </h3>
      <div className="resume-contents">
        <div className="resume-content-box">
          <div className="resume-content-box-heading">
            <Link to="/resume/basic">Basics</Link>
            <Link to="/resume/experience">Experience</Link>
            <Link to="/resume/location">Location</Link>
            <Link to="/resume/Skills">Skills</Link>
            <Link to="/resume/education">Education</Link>
            <Link to="/resume/project">Projects</Link>
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
