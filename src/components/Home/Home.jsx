
 import React from "react";
 import "./Home.css";
 import { Link } from "react-router-dom";

 import homeAnime from "../../assets/home_anime.gif";

  const Home = () => {
   
      return (
          <div className="home-container">
              <div className="header-text">
                  <h1>Welcome to my Portfolio!</h1>
                  <p>I am Rajat Bansal, a aspiring full stack developer</p>
              </div>
              <div className="head-btns">
                  <Link to="/about" className="btn btn-white">
                      <p className="btn-text">Know more about me</p>
                  </Link>
                  <Link to="/contact" className="btn btn-transparent">
                      <p className="btn-text">Connect with me</p>
                  </Link>
              </div>
              <div className="splash-image">
                  <img src={homeAnime} alt="animation" className="home-anime" />
              </div>
          </div>
      );
  }

  export default Home;