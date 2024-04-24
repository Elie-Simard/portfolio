import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolioBase.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by {greeting.title}
          <br /> Inspired by Ashutosh Hathidara's Opensource Portfolio
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle} /> */}
      </Fade>
    </div>
  );
}
