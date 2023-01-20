import { React, useState } from "react";
import "./Project.scss";

const Project = () => {
  const [firstProject, setFirstProject] = useState("");
  const [secondProject, setSecondProject] = useState("");
  const [firstProjectDesc, setFirstProjectDesc] = useState("");
  const [secondProjectDesc, setSecondProjectDesc] = useState("");
  const [firstToolsUsed, setFirstToolsUsed] = useState("");
  const [secondToolsUsed, setSecondToolsUsed] = useState("");
  return (
    <div className="project">
      <form>
        <h4>Project 1</h4>
        <div>
          <label>Project Name</label>
          <input
            type="text"
            placeholder="First Project"
            name="First Project"
            value={firstProject}
            required
            onChange={(e) => {
              setFirstProject(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Project Description</label>
          <input
            type="text"
            placeholder="Project Description"
            name="ProjectDescription"
            value={firstProjectDesc}
            required
            onChange={(e) => {
              setFirstProjectDesc(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Tools Used</label>
          <input
            type="text"
            placeholder="Tools used"
            name="firstToolsUsed"
            value={firstToolsUsed}
            required
            onChange={(e) => {
              setFirstToolsUsed(e.target.value);
            }}
          />
        </div>
        <h4>Project 2</h4>
        <div>
          <label>Project Name</label>
          <input
            type="text"
            placeholder="Second Project"
            name="secondProject"
            value={secondProject}
            required
            onChange={(e) => {
              setSecondProject(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Project Description</label>
          <input
            type="text"
            placeholder="Project Description"
            name="ProjectDescription"
            value={secondProjectDesc}
            required
            onChange={(e) => {
              setSecondProjectDesc(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Tools Used</label>
          <input
            type="text"
            placeholder="Tools used"
            name="secondToolsUsed"
            value={secondToolsUsed}
            required
            onChange={(e) => {
              setSecondToolsUsed(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Project;
