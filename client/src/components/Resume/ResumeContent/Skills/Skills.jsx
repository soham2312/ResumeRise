import React from "react";
import "./Skills.scss";
import { useState } from "react";

const Skills = () => {
  const [firstSkillType, setFirstSkillType] = useState("");
  const [secondSkillType, setSecondSkillType] = useState("");
  const [firstSkill, setFirstSkill] = useState("");
  const [secondSkill, setSecondSkill] = useState("");
  return (
    <div className="skill">
      <form>
        <div>
          <label>Skill</label>
          <input
            type="text"
            placeholder="Skill Type"
            name="First Project"
            value={firstSkillType}
            required
            onChange={(e) => {
              setFirstSkillType(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Skills</label>
          <input
            type="text"
            placeholder="Skills you have"
            name="firstSkill"
            value={firstSkill}
            required
            onChange={(e) => {
              setFirstSkill(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Skill</label>
          <input
            type="text"
            placeholder="Skill Type"
            name="Second Skill Type"
            value={secondSkillType}
            required
            onChange={(e) => {
              setSecondSkillType(e.target.value);
            }}
          />
        </div>

        <div>
          <label>Skills</label>
          <input
            type="text"
            placeholder="Skills you have"
            name="secondSkill"
            value={secondSkill}
            required
            onChange={(e) => {
              setSecondSkill(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Skills;
