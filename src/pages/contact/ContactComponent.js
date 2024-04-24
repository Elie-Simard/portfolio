import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
// import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolioBase.js";
import FeelingProud from "../../containers/greeting/FeelingProud.js";
import ContactForm from "../../containers/contact/ContactForm.js";

const ContactData = contactPageData.contactSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        {this.props.showHeaderAndFooter && (
          <Header theme={theme} toggleTheme={this.props.toggleTheme} />
        )}
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <FeelingProud theme={theme} />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>

                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <br />
                <SocialMedia theme={theme} />
                <br />
                <div className="resume-btn-div">
                  <Button
                    text="Voir mon CV"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
          {/* {this.props.showHeaderAndFooter && ( */}
          <Fade
            bottom
            duration={1000}
            distance="40px"
            className="address-heading-div"
          >
            <div className="address-heading-div">
              <div className="address-heading-text-div">
                <div className="contact-form-div">
                  {/* <br /> <br /> <br /> <br /> <br /> */}
                  <ContactForm />
                </div>
              </div>
              <div className="contact-heading-img-div">
                <AddressImg theme={theme} />
              </div>
            </div>
            <br />
            <br />
          </Fade>
          {/* )} */}
          {this.props.showHeaderAndFooter && <Footer theme={theme} />}
          {this.props.showHeaderAndFooter && <TopButton theme={theme} />}
        </div>
      </div>
    );
  }
}

export default Contact;
