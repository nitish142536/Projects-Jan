import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import type { CartItem } from "../CartContext";
import "../index.css";

export interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  image: string;
  badge?: string;
  category: string;
}
const categories = ["Vegetables", "Fruits", "Grains", "Dairy", "Spices", "Oil & Essentials", "Others"];
const products: Product[] = Array.from({ length: 120 }).map((_, i) => {
  const category = categories[i % categories.length];
  return {
    id: i + 1,
    name: `${category} Product ${i + 1}`,
    price: Math.floor(Math.random() * 200) + 10,
    unit: "kg",
    image: "/veg.jpg",
    badge: i % 5 === 0 ? "Fresh" : undefined,
    category, 
  };
});
const Products: React.FC = () => {
  const { addToCart, showCartPopup } = useContext(CartContext);
  console.log("CartContext addToCart:", addToCart);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | "All">("All");

  const handleAddToCart = (product: Product) => {
    const cartItem: CartItem = { ...product, quantity: 1 };
    
    addToCart(cartItem);
  };
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return (
    <div className="products-page">
      <h2 className="page-title">Products</h2>
      <div className="categories-filter">
        {["All", ...categories].map(cat => (
          <button
            key={cat}
            className={`category-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="img-wrapper">
              <img src={product.image} alt={product.name} />
              {product.badge && <span className="badge">{product.badge}</span>}
            </div>
            <h4>{product.name}</h4>
            <p>₹{product.price} / {product.unit}</p>
            <button className="add-cart-btn" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>


      {showCartPopup && (
        <div className="cart-popup">
          Item added to cart! <a href="/cart">View Cart</a>
        </div>
      )}
    </div>
  );
};

export default Products;
