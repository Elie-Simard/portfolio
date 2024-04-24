import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolioBase";
import styled from "styled-components";
import linktreeLogo from "../../assests/images/linktree_logo.png";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => {
        return (
          <a
            key={i}
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper {...media} {...props}>
              {media.name === "Linktree" ? (
                <img
                  src={linktreeLogo}
                  alt="Linktree"
                  style={{
                    width: "44px",
                    height: "44px",
                    verticalAlign: "middle",
                  }}
                />
              ) : (
                <i className={`fab ${media.fontAwesomeIcon}`}></i>
              )}
            </IconWrapper>
            {/* <span></span> */}
          </a>
        );
      })}
    </div>
  );
}
