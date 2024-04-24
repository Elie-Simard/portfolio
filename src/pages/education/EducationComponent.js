import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
// import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
// import { competitiveSites } from "../../portfolioBase";
import { certifications } from "../../portfolioBase";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        {this.props.showHeaderAndFooter && (
          <Header theme={theme} toggleTheme={this.props.toggleTheme} />
        )}
        <div className="basic-education">
          <Fade bottom duration={2000} distance="20px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
                <EducationImg theme={theme} />
              </div>

              <br />
              <h1 className="heading-text" style={{ color: theme.text }}>
                Formations
              </h1>
              {/* <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Basic Qualification and Certifcations
                </h3> */}
              {/* <CompetitiveSites logos={competitiveSites.competitiveSites} /> */}
            </div>
          </Fade>
          <Educations theme={this.props.theme} />
          {certifications.certifications.length > 0 ? (
            <Certifications theme={this.props.theme} />
          ) : null}
        </div>
        {this.props.showHeaderAndFooter && <Footer theme={theme} />}
        {this.props.showHeaderAndFooter && <TopButton theme={theme} />}
      </div>
    );
  }
}

export default Education;
