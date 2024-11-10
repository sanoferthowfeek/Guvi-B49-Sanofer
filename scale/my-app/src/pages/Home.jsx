// src/pages/Home.js
import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  padding: 60px;
  text-align: center;
`;

const HeroText = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Subtext = styled.p`
  font-size: 1.2em;
  color: #555;
`;

const Home = () => (
  <HomeContainer>
    <HeroText>Welcome to Scale Clone</HeroText>
    <Subtext>Building AI-driven tools for modern enterprises.</Subtext>
  </HomeContainer>
);

export default Home;
