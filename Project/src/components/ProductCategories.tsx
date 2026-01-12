import React from 'react';
import '../index.css';

import vegetablesImg from '../assets/veg.jpg';
import fruitsImg from '../assets/fruits.jpg';
import grainsImg from '../assets/grains.jpg';
import spicesImg from '../assets/spices.jpg';
import dairyImg from '../assets/dairy.jpg';
import oilImg from '../assets/oil.jpg';
import othersImg from '../assets/others.png';

const categories = [
  { name: 'Vegetables', icon: vegetablesImg },
  { name: 'Fruits', icon: fruitsImg },
  { name: 'Grains', icon: grainsImg },
  { name: 'Spices', icon: spicesImg },
  { name: 'Dairy', icon: dairyImg },
  { name: 'Oil & Essentials', icon: oilImg },
  { name: 'Others', icon: othersImg },
];

const ProductCategories = () => {
  return (
    <section className="categories">
      <h3 className="categories-title">Product Categories</h3>
      <div className="categories-grid">
        {categories.map((cat, idx) => (
          <div key={idx} className="category-card">
            <div className="category-icon">
              <img src={cat.icon} alt={cat.name} />
            </div>
            <p className="category-name">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
