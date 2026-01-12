import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustStats from '../components/TrustStats';
import ProductCategories from '../components/ProductCategories';
import Footer from '../components/Footer'; 
const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <TrustStats />
      <ProductCategories />
      <Footer />
    </div>
  );
};

export default HomePage;
