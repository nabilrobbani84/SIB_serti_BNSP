import React from "react";
import styled from "styled-components";

// Styled Components
const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("https://s2.bukalapak.com/bukalapak-kontenz-production/content_attachments/88257/original/Bengkel_variasi_motor_terdekat_1.jpg"); /* Replace with your background image URL */
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5%;
  color: white;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); /* Dark overlay for better text contrast */
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.3;
  margin: 0 0 1rem;
  color: white;

  span {
    color: #ff6b00; /* Highlighted color */
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin: 0 0 2rem;
  color: #ddd;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Divider = styled.div`
  width: 50px;
  height: 4px;
  background-color: #ff6b00; /* Accent color */
  margin-bottom: 1rem;
`;

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #25d366;
  color: white;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    background: #1ebc57;
    transform: scale(1.1);
    transition: 0.3s ease;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <ContentWrapper>
        <Divider />
        <Title>
          Temukan <span>suku cadang motor terbaik</span>
        </Title>
        <Subtitle>dari merek terpercaya, siap meningkatkan performa kendaraan Anda</Subtitle>
      </ContentWrapper>
      <WhatsAppButton
        href="https://wa.me/85777659082" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </WhatsAppButton>
    </HeroContainer>
  );
};

export default HeroSection;
