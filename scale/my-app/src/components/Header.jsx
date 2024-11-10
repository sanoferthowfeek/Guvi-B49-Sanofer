import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const NavLinks = styled.nav`
  a {
    margin: 0 15px;
    color: #333;
    font-weight: 500;
    text-decoration: none;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>Scale Clone</Logo>
    <NavLinks>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </NavLinks>
  </HeaderContainer>
);

export default Header;
