import React, { useState } from "react";
import styled from "styled-components";

import emailjs from "emailjs-com";
import { FaGoogle } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const SuccessMessage = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  display: ${(props) => (props.visible ? "block" : "none")};
`;
const SubmitButton = styled.input`
  background-color: ${({ theme }) => theme.dark};
  border: solid 1px #55198b;
  color: white;
  font-weight: 500;
  line-height: 1.1;
  width: max-content;
  padding: 13px 22px;
  border-radius: 6px;
  text-align: center;
  font-family: "Google Sans Regular";
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 2px;
  display: block;
  margin: 20px auto 0; /* Center vertically and horizontally */
  transition: ease-in 0.3s;

  &:hover {
    background-color: #ffffff;
    color: black;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    padding: 12px 18px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

const Checkmark = styled.span`
  margin-right: 5px;
`;

const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  background-color: ${({ theme }) => theme.imageHighlight};

  border-radius: 5px;

  color: ${({ theme }) => theme.textInput};
  &::placeholder {
    color: ${({ theme }) => theme.dark};
  }
`;

const TextArea = styled.textarea`
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.imageHighlight};
  color: ${({ theme }) => theme.textInput};

  &::placeholder {
    color: ${({ theme }) => theme.dark};
  }
`;

const Frame = styled.div`
  display: flex;
  align-items: center; /* Center vertically */
  margin-bottom: 10px;
`;

const EmailAddress = styled.p`
  font-size: 14px;
  margin: 0;
  color: ${({ theme }) => (theme.name === "dark" ? "#ffffff" : "#333333")};
  white-space: nowrap; /* Prevent email from breaking into two lines */
  overflow: hidden; /* Hide overflow text */
`;

const GmailIcon = styled(FaGoogle)`
  font-size: 20px;
  color: #d14836;
  margin-right: 10px;
`;

const ContactForm = () => {
  const [successVisible, setSuccessVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d8s8gli",
        "template_0uvzrpi",
        e.target,
        "moaY47kUVsG_RIjRC"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSuccessVisible(true); // Show success message
          setTimeout(() => setSuccessVisible(false), 5000); // Hide message after 5 seconds
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          alert("Email sending failed!");
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <FormContainer id="contact-form" onSubmit={handleSubmit}>
      <div class="centered-frame">
        <Frame>
          <IoMdMail size={20} style={{ marginRight: "10px" }} />{" "}
          <a
            href="mailto:eliesimard.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailAddress>
              <code>eliesimard.dev@gmail.com</code>
            </EmailAddress>
          </a>
        </Frame>
      </div>
      <input type="hidden" name="contact_number" value="697483" />
      <Input type="text" name="user_name" placeholder="Nom" required />
      <Input type="email" name="user_email" placeholder="Courriel" required />
      <TextArea
        name="message"
        placeholder="Message"
        rows="4"
        required
      ></TextArea>
      <SubmitButton type="submit" value="Envoyer" />
      <SuccessMessage visible={successVisible}>
        <Checkmark role="img" aria-label="Green checkmark">
          <span role="img" aria-label="Green checkmark">
            ✅
          </span>
        </Checkmark>{" "}
        Your email has been successfully sent! I'll get back to you promptly.
        Thank you for reaching out!
      </SuccessMessage>
    </FormContainer>
  );
};

export default ContactForm;
