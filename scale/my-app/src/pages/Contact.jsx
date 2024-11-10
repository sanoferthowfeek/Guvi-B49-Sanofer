import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const ContactText = styled.p`
  font-size: 1.1em;
  color: #555;
`;

const Contact = () => (
  <ContactContainer>
    <h2>Contact Us</h2>
    <ContactText>
      Reach out to us at contact@scaleclone.com or call us at (123) 456-7890.
    </ContactText>
  </ContactContainer>
);

export default Contact;
