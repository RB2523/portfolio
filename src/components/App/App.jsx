
import React from "react";
import { BrowserRouter , Route } from "react-router-dom";

import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Skills from  "../Skills/Skills";
import Contact from "../Contact/Contact";

import NavBar from "../NavBar/NavBar";



import "./App.css"
import GoHome from "../GoHome/GoHome";


function App() {
    return (
      <div>
          <BrowserRouter>
             <div>
                <NavBar />
                <Route exact path="/portfolio" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/contact" component={Contact} />
                <GoHome />
             </div>
          </BrowserRouter>
      </div>
    );
}

export default App;
