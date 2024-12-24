import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const HeaderContainer = styled.header`
  background: linear-gradient(90deg, #222, #444);
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #ff6b00;
  margin: 0;

  span {
    color: white;
  }
`;

const NavMenu = styled.nav`
  ul {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center; /* Center align menu items */
    list-style: none;
    gap: 15px;
    margin: 0;
    padding: 15px;
    background-color: #222;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    height: auto;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
    border-radius: 0 0 10px 10px;
    transition: all 0.3s ease-in-out;

    @media (min-width: 769px) {
      display: flex;
      flex-direction: row;
      position: static;
      gap: 25px;
      background-color: transparent;
      box-shadow: none;
      padding: 0;
    }
  }

  li {
    font-size: 1rem;
    cursor: pointer;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    transition: color 0.3s ease;

    &:hover {
      color: #ff6b00;
    }

    @media (max-width: 768px) {
      width: 100%; /* Make each menu item span the full width */
      text-align: center;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    background: white;
    height: 3px;
    width: 30px;
    margin: 5px 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  &.open span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }

  &.open span:nth-child(2) {
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }

  @media (max-width: 768px) {
    display: flex;
    margin-left: auto;
  }
`;

const Button = styled.button`
  background-color: #ff6b00;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #e65a00;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 90%; /* Adjust button width for smaller screens */
    text-align: center;
    margin-top: 10px;
  }
`;

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Logo>
        Ride<span>Parts</span>
      </Logo>
      <Hamburger className={isOpen ? "open" : ""} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>
      <NavMenu isOpen={isOpen}>
        <ul>
          <li>Beranda</li>
          <li>About Us</li>
          <li>Categori</li>
          <li>Blog</li>
          <li>
            <Button>Contact Us</Button>
          </li>
        </ul>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Navbar;
