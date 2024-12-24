import React from "react";
import styled from "styled-components";

// Styled Components
const SectionContainer = styled.section`
  background-color: #f9f9f9;
  padding: 50px 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const DownloadButton = styled.a`
  display: inline-block;
  background-color: #ff6b00;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 30px;
  cursor: pointer;

  &:hover {
    background-color: #e65a00;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;

const CategoryCard = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #ff6b00;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const CategoryName = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const CategorySection = () => {
  // Category data
  const categories = [
    { icon: "⚙️", name: "Sparepart Standar" },
    { icon: "🔧", name: "Sparepart Variasi" },
    { icon: "🏍️", name: "Bodypart Motor" },
    { icon: "💡", name: "Aksesoris Motor" },
    { icon: "🛢️", name: "Pelumas Motor" },
    { icon: "🛞", name: "Ban/Velg Motor" },
  ];

  return (
    <SectionContainer>
      <Title>Kategori Produk</Title>
      <Subtitle>Lebih dari 10.000 suku cadang siap dikirim ke seluruh Indonesia</Subtitle>
      <CategoryGrid>
        {categories.map((category, index) => (
          <CategoryCard key={index}>
            <Icon>{category.icon}</Icon>
            <CategoryName>{category.name}</CategoryName>
          </CategoryCard>
        ))}
      </CategoryGrid>
    </SectionContainer>
  );
};

export default CategorySection;
