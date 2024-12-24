import React from "react";
import styled from "styled-components";

// Styled Components
const SectionContainer = styled.section`
  background: linear-gradient(135deg, #f0f0f0, #ffffff);
  padding: 60px 20px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin: 20px;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
  }
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #555;
  margin-bottom: 30px;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 45%;
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextContent = styled.div`
  width: 50%;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const Highlight = styled.span`
  color: #ff6b00;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const Button = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #ff6b00, #ff9300);
  color: white;
  padding: 12px 25px;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  margin-top: 20px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #e65a00, #ff6b00);
    transform: translateY(-5px);
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);
  }
`;

const AboutUs = () => {
  return (
    <SectionContainer>
      <Title>About <Highlight>Us</Highlight></Title>
      <Subtitle>
        Kami adalah platform terpercaya untuk membeli dan menjual sparepart motor. 
        Dengan komitmen menyediakan produk berkualitas dan layanan pelanggan terbaik, 
        kami mendukung perjalanan Anda dengan solusi terbaik.
      </Subtitle>
      <ContentWrapper>
        <Image
          src="https://tse1.mm.bing.net/th?id=OIP.MlLouE8pBMiHWXGM2B8xyQHaFR&pid=Api&P=0&h=180" // Replace with your image URL
          alt="About Us"
        />
        <TextContent>
          <p>
            Dengan pengalaman bertahun-tahun di industri otomotif, <Highlight>kami</Highlight> 
            menghadirkan lebih dari <Highlight>10.000 sparepart motor</Highlight> yang berkualitas, 
            mulai dari <Highlight>sparepart standar</Highlight> hingga <Highlight>aksesoris custom</Highlight>.
          </p>
          <p>
            Layanan kami mencakup pengiriman cepat ke seluruh Indonesia, sehingga Anda bisa mendapatkan 
            produk yang Anda butuhkan dengan mudah. Bergabunglah bersama kami dan jadikan pengalaman 
            belanja sparepart motor Anda lebih praktis dan terpercaya!
          </p>
          <Button href="/contact">Hubungi Kami</Button>
        </TextContent>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default AboutUs;
