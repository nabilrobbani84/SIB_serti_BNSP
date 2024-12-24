import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #1e1e2f;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  max-width: 1200px;
  margin: 40px auto 0;

  @media (max-width: 1024px) {
    padding: 20px;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 0.9rem;
    gap: 8px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 0.85rem;
    gap: 6px;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
  opacity: 0.8;

  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  flex-wrap: wrap;
  justify-content: center;

  a {
    color: #4fd1c5;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;

    &:hover {
      color: #ffffff;
    }

    @media (max-width: 1024px) {
      font-size: 0.85rem;
    }

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }

    @media (max-width: 480px) {
      font-size: 0.75rem;
    }
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
