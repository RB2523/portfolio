
 import React from "react";
import Calculator from "./proj1.PNG";
 import bubbleSortVisualizer from "./proj2.PNG";
 import portfolio from "./proj3.PNG";
 import onlineExamSystem from "./proj4.jpeg";

  import "../../components/Projects/Projects.css"


  const OnlineExamSystemDesc = () => {
      return(
              <>
                  <span>This is online exam website a full stack application where</span>
                  <p className="margin-Top">
                      User can
                      <ul className="margin-Top">
                          <li>Give test</li>
                          <li>See result</li>
                          <li>Login</li>
                          <li>logout</li>
                      </ul>
                  </p>
                  <p>
                      Admin can
                      <ul className="margin-Top">
                          <li>Add , delete new subject</li>
                          <li>Add , delete exam</li>
                          <li>Add , delete , update question</li>
                          <li>Login</li>
                          <li>logout</li>
                          <li>See the result of the all student</li>
                          <li>See the result of individual student</li>
                          <li>see the all question regarding a particular exam</li>
                      </ul>
                  </p>
                  <p> Develop using React , Spring boot Rest API , Mysql database</p>

             </>
          ); 
          
  }

export const projectsData = [
    {
        projectName: 'Online Exam System Website',
        projectDescription:<OnlineExamSystemDesc/>,
        imageUrl: onlineExamSystem,
        projectUrl: 'https://www.youtube.com/watch?v=vT7_coBmnLA',
    },
    {
        projectName: 'Portfolio Website',
        projectDescription:'My portfolio website developed using React and CSS.',
        imageUrl: portfolio,
        projectUrl:  'https://rb2523.github.io/portfolio/',
    },
    {
        projectName: 'Bubble Sort Visualizer',
        projectDescription:'This project helps you to understand how bubble sort works, developed using HTML, CSS and JAVASCRIPT.',
        imageUrl: bubbleSortVisualizer,
        projectUrl: 'https://rb2523.github.io/BubbleSortVisualizer/',
    },
    {
        projectName: 'Calculator',
        projectDescription:'A calculator in which you can perform addition, subtraction, multiplication and division etc, developed using HTML, CSS and JAVASCRIPT.',
        imageUrl: Calculator,
        projectUrl: 'https://rb2523.github.io/calculatorWeb/',
    },
];
