import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

import "./Experience.css";
import { Fade } from "react-reveal";
import ExperienceCard from "../../components/experienceCard/ExperienceCard"; // Make sure this path is correct

const combinedExperiences = [
  {
    title:
      "Stage axé sur la manipulation de données et la création de script, PHP/JS/SQL/CSS/Smarty/DataTables",
    company: "Riopel Consultant Informatique",
    company_url: "https://riopel-consultant.com",
    logo_path: "riopel-consultant-logo.png",
    duration: "May 2024 - Juil. 2024",
    location: "Montréal, Québec",
    description:
      "Contribuer à la création d'un portail web pour manipuler et regrouper des données provenant de différentes API (ConnectWise Manage, Veeam), stocker ces données dans une base de données MySQL, créer des rapports, automatiser certaines tâches quotidiennes et créer des alertes par courriel par le biais de scripts PHP et JavaScript.",
    color: "#0879bf",
  },
  {
    title: "Developper Program Member",
    company: "GitHub",
    company_url: "https://github.com/",
    logo_path: "github_logo.png",
    duration: "Août 2024 - PRÉSENT",
    location: "Travail à distance",
    description:
      "Je commence à contribuer activement à divers projets open-source. Je me concentre actuellement sur le projet 'Queering the Map', un beau projet qui aide la communauté queer à documenter leurs expériences dans une carte du monde interactive. Mes contributions incluent des améliorations des fonctionnalités, la correction de bogues, et la collaboration avec la communauté pour soutenir le succès du projet. J'apprécie particulièrement travailler sur des initiatives inspirantes comme celle-ci et je suis également intéressé à aider la communauté des musiciens classiques.",
    color: "#181717",
  },
];

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        {this.props.showHeaderAndFooter && (
          <Header theme={theme} toggleTheme={this.props.toggleTheme} />
        )}
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              {/* <div className="experience-heading-img-div">

              </div> */}
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  Expérience
                </h1>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Voici un aperçu de mes expériences professionnelles et
                  bénévoles significatives relié au développement web
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="experience-list">
          {combinedExperiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              index={index}
              totalCards={combinedExperiences.length}
              experience={exp}
              theme={theme}
            />
          ))}
        </div>
        {this.props.showHeaderAndFooter && (
          <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        )}
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
