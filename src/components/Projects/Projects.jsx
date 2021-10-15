
 import React from "react";
 import "./Projects.css";

 import Header from "../Header/Header";
 import FooterLink from "../FooterLink/FooterLink";

 import { projectsData } from "../../assets/projects/projectsData";
import ProjectCard from "./ProjectCard";


  const Projects = () => {
      return (
          <div className="section-container">
              <Header 
              heading="My Projects."
              details="Here are a few cool things I've worked on, do check them out!"
              />

              <div className="project-cards-container">
                  {
                      projectsData.map((project , i) => {
                          return(
                              <ProjectCard key={i}
                              projectName={project.projectName}
                              projectDescription = {project.projectDescription}
                              imageUrl = {project.imageUrl}
                              projectUrl = {project.projectUrl}
                              />
                              

                          ); 
                      })
                  }
              </div>

               <FooterLink
                phrase="Check out "
                link="my skills!"
                toAddress="/skills"
               />
              
          </div>
      );
  }

  export default Projects;