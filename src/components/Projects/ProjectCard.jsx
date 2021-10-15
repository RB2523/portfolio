
 import React from "react";
 import "./Projects.css"; 

  const ProjectCard = (props) => {
      return (
          <div className="project-card">
              <div className="image-container">
                  <a href={props.projectUrl} className="project-external-link" target="_blank" rel="noreferrer">
                      <img src={props.imageUrl} alt="project" className="project-image" />
                  </a>
              </div>

               <div className="project-details-container">
                   <h2 className="project-heading">{props.projectName}</h2>
                   <p className="project-details">{props.projectDescription}</p>
               </div>

          </div>
          
      );
  }

  export default ProjectCard;