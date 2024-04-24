import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolioBase.js";
import SeoHeader from "../seoHeader/SeoHeader";
import styled from "styled-components";
import { materialDarkTheme } from "../../theme.js";

const Toggle = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;

  &:checked + label {
    background: #242424;
  }

  &:checked + label:after {
    left: 49px;
    transform: translateX(-100%);
    background: linear-gradient(180deg, #777, #3a3a3a);
  }
`;

const Label = styled.label`
  width: 50px;
  height: 20px;
  position: relative;
  display: block;
  background: #ebebeb;
  border-radius: 20px;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.4),
    inset 0px -1px 3px rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: 0.3s;

  &:after {
    content: "";
    width: 18px;
    height: 18px;
    position: absolute;
    top: 1px;
    left: 1px;
    background: linear-gradient(180deg, #ffcc89, #d8860b);
    border-radius: 18px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }

  &:active:after {
    width: 26px;
  }
`;

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  state = {
    isSmallScreen: window.innerWidth <= 768,
  };

  componentDidMount() {
    window.addEventListener("resize", this.checkScreenSize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkScreenSize);
  }

  checkScreenSize = () => {
    this.setState({ isSmallScreen: window.innerWidth <= 768 });
  };

  toggleMenu = () => {
    this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }));
  };

  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "home";
    const { isSmallScreen, isMenuOpen } = this.state;

    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink to={link} tag={Link} className="logo">
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <input
              className="menu-btn"
              type="checkbox"
              id="menu-btn"
              checked={isMenuOpen}
              onChange={this.toggleMenu}
            />{" "}
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            {/* <div className="menu-container-right"> */}
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <NavLink
                  to="/home"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Éducation
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/projects"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Projets
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            {/* {isSmallScreen && (
              <>
                <br />
                <br />
                <br />
              </>
            )} */}
            {!isSmallScreen && (
              <>
                <Toggle
                  type="checkbox"
                  className="darkmode-toggle"
                  id="theme-toggle"
                  onChange={this.props.toggleTheme}
                  checked={this.props.theme === materialDarkTheme}
                />
                <Label htmlFor="theme-toggle"></Label>
              </>
            )}
            {/* </div> */}
            {isSmallScreen && (
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Toggle
                  type="checkbox"
                  className="darkmode-toggle"
                  id="theme-toggle"
                  onChange={this.props.toggleTheme}
                  checked={this.props.theme === materialDarkTheme}
                />
                <Label htmlFor="theme-toggle"></Label>
              </div>
            )}
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
