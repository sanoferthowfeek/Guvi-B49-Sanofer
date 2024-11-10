import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const AboutText = styled.p`
  font-size: 1.1em;
  color: #555;
`;

const About = () => (
  <AboutContainer>
    <h2>About Us</h2>
    <AboutText>
      We are a leading company in AI solutions, providing cutting-edge
      technology to help businesses thrive in a digital world.
    </AboutText>
  </AboutContainer>
);

export default About;
