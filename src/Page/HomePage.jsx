import React from "react";
import Hero from "../Components/Hero/Hero";
import Gallery from "../Components/Gallery/Gallery";
import CategorySection from "../Components/Categori/Categori";
import AboutUs from "../Components/AboutUs/AboutUs";

const HomePage = () => (
    <>
    
        <Hero/>
        <AboutUs/>
        <CategorySection />
        <Gallery />
    </>
);

export default HomePage;
