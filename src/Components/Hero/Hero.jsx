import React from "react";
import styled from "styled-components";

// Styled Components
const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url("https://bengkuluekspress.disway.id/upload/ec60d3d044af47689705a95eb651eee4.jpg")
    center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: white;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  @media (max-width: 1024px) {
    padding: 15px;
    background-position: top center; /* Lebih fleksibel */
    background-size: cover;
  }

  @media (max-width: 768px) {
    padding: 12px;
    background-position: top center;
    background-size: cover;
  }

  @media (max-width: 480px) {
    padding: 10px;
    background-position: top;
    background-size: cover;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 90%;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 85%;
    padding: 10px; /* Tambahan padding untuk estetika */
  }

  @media (max-width: 480px) {
    max-width: 80%;
    padding: 8px; /* Minimal padding untuk mobile */
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.3;
  margin-bottom: 1rem;
  color: white;

  span {
    color: #ff6b00;
  }

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem; /* Ukuran lebih kecil untuk mobile */
    margin-bottom: 0.6rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: #ddd;

  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem; /* Font kecil untuk mobile */
    margin-bottom: 0.7rem;
  }
`;

const Divider = styled.div`
  width: 50px;
  height: 5px;
  background-color: #ff6b00;
  margin: 0 auto 1rem;

  @media (max-width: 768px) {
    width: 40px; /* Sesuaikan untuk tablet */
    height: 4px;
  }

  @media (max-width: 480px) {
    width: 30px; /* Lebih kecil untuk mobile */
    height: 3px;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer id="beranda">
      <ContentWrapper>
        <Divider />
        <Title>
          Temukan <span>suku cadang motor terbaik</span>
        </Title>
        <Subtitle>
          Dari merek terpercaya, siap meningkatkan performa kendaraan Anda
        </Subtitle>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default HeroSection;
