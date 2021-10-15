
 import React from "react";
 import "./Skills.css";
 
 const SkillCard = (props) => {
     return (
         <div className="skill">
              <img src={props.skillImage} alt="skill" />
              <p>{props.skillName}</p>
          </div>
      );
  }

  export default SkillCard;