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
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 1.5rem;
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
    align-items: center;
    list-style: none;
    gap: 15px;
    margin: 0;
    padding: 10px;
    background-color: #333;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
    border-radius: 0 0 10px 10px;
    transform: ${(props) => (props.isOpen ? "translateY(0)" : "translateY(-20px)")};
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    transition: opacity 0.3s, transform 0.3s;

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      position: static;
      background-color: transparent;
      box-shadow: none;
      padding: 0;
      transform: none;
      opacity: 1;
    }
  }

  li {
    font-size: 1rem;
    color: white;
    cursor: pointer;
    text-align: center;
    padding: 10px 0;
    transition: color 0.3s;

    &:hover {
      color: #ff6b00;
    }
  }
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  span {
    background: white;
    height: 3px;
    width: 25px;
    margin: 4px 0;
    transition: transform 0.3s, opacity 0.3s;
  }

  &.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  &.open span:nth-child(2) {
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  @media (min-width: 768px) {
    display: none;
    margin-left: 20px;
  }
`;

const Button = styled.button`
  background-color: #ff6b00;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #e65a00;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
  }
`;

// Scroll to Section Function
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Logo>
        Tech<span>Nova</span>
      </Logo>
      <Hamburger className={isOpen ? "open" : ""} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>
      <NavMenu isOpen={isOpen}>
        <ul>
          <li onClick={() => scrollToSection("beranda")}>Beranda</li>
          <li onClick={() => scrollToSection("about-us")}>About Us</li>
          <li onClick={() => scrollToSection("kategori")}>Kategori</li>
          <li onClick={() => scrollToSection("galeri")}>Gallery</li>
          <li>
            <Button onClick={() => scrollToSection("contact-us")}>Contact Us</Button>
          </li>
        </ul>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Navbar;
