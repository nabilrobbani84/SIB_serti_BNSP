import React from "react";
import styled from "styled-components";

// Styled Components
const SectionContainer = styled.section`
  padding: 50px 20px;
  background-color: #f9f9f9;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 15px;
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
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

const GalleryCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-bottom: 4px solid #ff6b00;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const OverlayText = styled.p`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const GallerySection = () => {
  // Sample gallery data
  const galleryData = [
    {
      image: "https://imgx.gridoto.com/crop/61x118:1407x899/700x465/filters:watermark(file/2017/gridoto/img/watermark.png,5,5,60)/photo/2021/10/01/whatsapp-image-2021-10-01-at-10-20211001105013.jpeg", // Replace with actual image URL
      title: "Mitra 1",
    },
    {
      image: "https://pbs.twimg.com/media/DnTJgdrU8AAbyZk.jpg:large", // Replace with actual image URL
      title: "Mitra 2",
    },
    {
      image: "http://usahabengkelsparepartmotor.com/wp-content/uploads/2011/10/MITRA60-4.jpg", // Replace with actual image URL
      title: "Mitra 3",
    },
    {
      image: "https://2.bp.blogspot.com/-2G8nMk3F0AE/Vb4KgPljP1I/AAAAAAAAAcI/Egk_ndGKwqQ/s1600/usaha-bengkel-motor.jpg", // Replace with actual image URL
      title: "Mitra 4",
    },
  ];

  return (
    <SectionContainer>
      <Title>Galeri Mitra Belipart</Title>
      <Subtitle>
        Lebih dari 5000 bengkel telah menjadi mitra kami dan jumlah mitra kami terus bertambah.
      </Subtitle>
      <GalleryGrid>
        {galleryData.map((item, index) => (
          <GalleryCard key={index}>
            <Image src={item.image} alt={item.title} />
            <Overlay>
              <OverlayText>{item.title}</OverlayText>
            </Overlay>
          </GalleryCard>
        ))}
      </GalleryGrid>
    </SectionContainer>
  );
};

export default GallerySection;
