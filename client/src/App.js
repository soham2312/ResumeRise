import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";

// resume contents

import Resume from "./components/Resume/Resume";
import Basic from "./components/Resume/ResumeContent/Basic/Basic";
import Project from "./components/Resume/ResumeContent/Project/Project";
import Location from "./components/Resume/ResumeContent/Location/Location";
import Education from "./components/Resume/ResumeContent/Education/Education";
import Experience from "./components/Resume/ResumeContent/Experience/Experience";
import Skills from "./components/Resume/ResumeContent/Skills/Skills";
import Awards from "./components/Resume/ResumeContent/Awards/Awards";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          <Route path="resume" element={<Resume />}>
            <Route path="basic" element={<Basic />} />
            <Route path="location" element={<Location />} />
            <Route path="education" element={<Education />} />
            <Route path="experience" element={<Experience />} />
            <Route path="skills" element={<Skills />} />
            <Route path="project" element={<Project />} />
            <Route path="awards" element={<Awards />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
