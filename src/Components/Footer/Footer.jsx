import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #1e1e2f;
  color: white;
  text-align: center;
  padding: 20px 40px;
  margin-top: 40px;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  max-width: 100%;
  width: 100%;
  margin: 40px 0 0;

  @media (max-width: 1024px) {
    padding: 20px 30px;
    gap: 18px;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
    gap: 15px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 12px 15px;
    gap: 12px;
    font-size: 0.85rem;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
  opacity: 0.9;

  @media (max-width: 1024px) {
    font-size: 0.95rem;
    opacity: 0.85;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    opacity: 0.8;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    opacity: 0.8;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 10px;
  flex-wrap: wrap;
  justify-content: center;

  a {
    color: #4fd1c5;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.3s ease, transform 0.2s ease;

    &:hover {
      color: #ffffff;
      transform: scale(1.1);
    }

    @media (max-width: 1024px) {
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      font-size: 0.85rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>© 2024 TechNova</FooterText>
    <FooterLinks>
      <a href="/privacy-policy">Privacy Policy</a>
      <a href="/terms-of-service">Terms of Service</a>
      <a href="/contact">Contact Us</a>
    </FooterLinks>
  </FooterContainer>
);

export default Footer;
