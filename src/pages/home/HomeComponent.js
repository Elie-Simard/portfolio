import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../education/EducationComponent";
import Projects from "../projects/Projects";
import Contact from "../contact/ContactComponent";

class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} toggleTheme={this.props.toggleTheme} />
        <Greeting theme={this.props.theme} style={{ marginBottom: "1px" }} />
        <Skills theme={this.props.theme} />
        <div>
          <br /> <br /> <br /> <br />
        </div>
        <Educations theme={this.props.theme} showHeaderAndFooter={false} />
        <div>
          <br /> <br /> <br /> <br /> <br />
        </div>
        <Projects theme={this.props.theme} showHeaderAndFooter={false} />
        <div>
          <br /> <br /> <br /> <br /> <br />
        </div>
        <Contact theme={this.props.theme} showHeaderAndFooter={false} />

        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
