
 import React from "react";
 import "./FooterLink.css";

 import { Link } from "react-router-dom";

  const FooterLink = (props) => {
      return (
          <div className="footer-link">
              {props.phrase}
              <Link to={props.toAddress} className="footer-link-element">
                  {props.link}
              </Link>
          </div>
      );
  }

  export default FooterLink;