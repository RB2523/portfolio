
 import React from "react";
 import "./Skills.css";

 import Header from "../Header/Header";
 import FooterLink from "../FooterLink/FooterLink";

 import skillsVector from "../../assets/skills_vector.png";
 import { skillList } from "../../assets/skills/skillsData";
 import SkillCard from "./SkillCard";


  const Skills = () => {

      return (
          <div className="section-container">
              <Header 
              heading = "My Skills."
              details="Passionate about new technologies, I keep exploring stuff. Here's the technologies I know!"
              />

              <div className="skill-card-container">
                 {
                     skillList.map((skill , i) => {
                        return <SkillCard key={i} skillName= {skill.skillName} skillImage = {skill.skillImage} />
                     })
                 }
              </div>

              <FooterLink
               phrase = "Get in "
               link="touch"
               toAddress = "/contact"
              />

              <div className="skills-vector-frame">
                   <img src={skillsVector} alt="skills" className="skills-vector" />
              </div>
          </div>
      );
  }

  export default Skills;