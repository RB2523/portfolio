
 import React from "react";
 import "./About.css";
import Header from "../Header/Header";

 import aboutVector from "../../assets/about_vector.png";
import FooterLink from "../FooterLink/FooterLink";

import aboutAnime from "../../assets/about_anime.gif";

  const About = () => {
      return (
          <div className="section-container">
              <Header heading="About Me." 
              details="I'm a aspiring full stack developer focused on crafting clean & user‑friendly experiences, 
              I am passionate about building excellent software that improves the lives of those around me."/>

              <div className="about-main">

                  <div className="about-main-left">

                      {/* sub section 1 */}
                      {/* <h3 className="about-sub-head">Education</h3>
                      <p className="about-details">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, commodi molestias voluptas optio placeat similique.{' '}
                         <a href="/" className="about-link-element">My free react courses</a>
                      </p> */}

                      {/* sub section 2 */}
                      <h3 className="about-sub-head">COMPETITIVE PROGRAMMING</h3>
                      <p className="about-details">
                          <ul className="list-container">
                             <li>
                               <span> HackerRank</span> 
                         {` `} (Handle: 
                         <a href="https://www.hackerrank.com/RB2523"  target="_blank" rel="noreferrer"
                         className="about-link-element color-blue">RB2523)</a>
                               <ul>
                                  <li>Problem Solving: 6 Star</li>
                                  <li>Java: 5 Star</li>
                                  <li>Problems Solved: 100+ </li>
                               </ul>
                             </li>

                             <li>
                               <span>Codeforces</span>  
                               {` `} (Handle: 
                               <a href="https://codeforces.com/profile/Ram25" target="_blank" rel="noreferrer"
                               className="about-link-element color-blue">Ram25)</a>
                               <ul>
                                  <li>Problems Solved: 50+ </li>
                               </ul>
                             </li>

                             <li>
                               <span>LeetCode</span>  
                               {` `} (Handle:  
                               <a href="https://leetcode.com/RB2523/" target="_blank" rel="noreferrer"
                               className="about-link-element color-blue">RB2523)</a>
                               <ul>
                                  <li>Problems Solved: 40+ </li>
                               </ul>
                             </li>

                             <li>
                                 <span>GeeksForGeeks</span> 
                               {` `} (Handle: 
                               <a href="https://auth.geeksforgeeks.org/user/rb2523/profile"  target="_blank" rel="noreferrer"
                                  className="about-link-element color-blue">rb2523)</a>
                               <ul>
                                  <li>Problems Solved: 200+ </li>
                               </ul>
                             </li>
                          </ul>
                         
                      </p>

                      {/* sub section 3 */}
                      <h3 className="about-sub-head">ACHIEVEMENTS</h3>
                      <p className="about-details">
                          <li>
                      Secured 2nd position in <b>“On the Spot Programming”</b> event, conducted in MDU, Rohtak.{' '}
                          </li>
                        
                      </p>

                  </div>

                  <div className="about-main-right">
                      <img className="about-anime" src={aboutAnime} alt="animation" />
                  </div>
              </div>

              <FooterLink 
               phrase="Check out my "
               link="Projects"
               toAddress="/projects"
               />

               {/* vector Frame */}
              <div className="vector-frame">
                  <img src={aboutVector} className="about-vector" alt="about" />
              </div>
          </div>
      );
  }

  export default About;