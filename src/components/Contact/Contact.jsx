
 import React from "react";
 import "./Contact.css";

 import Header from "../Header/Header";
 import FooterLink from "../FooterLink/FooterLink";

 import contactVector from "../../assets/contact_anime.png";

 import github from "../../assets/gh.png";
 import linkedin from "../../assets/li.png";
 import web from "../../assets/web.png";

  const Contact = () => {
      return (
          <div className="section-container">
              <Header 
              heading="Get in touch."
              details="Interested to collaborate? Feel free to drop me an email."
              />

              {/* form section */}
              <div className="contact-form-container">
                  <form className="contact-form" action="https://formspree.io/f/xleakewk"
                    method="POST">

                      <input type="email" placeholder="Your Email ID"  name="_replyto" 
                      className="input-box email-input"/>

                        <textarea 
                        type="text"
                        placeholder="Your Message" 
                        name="message"
                        className="input-box body-input"></textarea>

                        <button type="submit" className="contact-btn">Send Email</button>

                  </form>
              </div>

              {/* social icon */}
              <div className="social-icons-container">
                  <a href="https://github.com/rb2523" target="_blank" rel="noreferrer" className="social-icon">
                      <img src={github} alt="social" />
                  </a>

                  <a href="https://www.linkedin.com/in/rb2523/" target="_blank" rel="noreferrer" className="social-icon">
                      <img src={linkedin} alt="social" />
                  </a>

                  <a href="https://rb2523.github.io/portfolio/" target="_blank" rel="noreferrer" className="social-icon">
                      <img src={web} alt="social" />
                  </a>
              </div>

               <FooterLink
                phrase="Read more "
                link=" about me."
                toAddress="/about"
               />

                <div className="vector-frame">
                    <img src={contactVector} alt="vector" className="about-vector" />
                </div>

          </div>
      );
  }

  export default Contact;