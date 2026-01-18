import React, { useContext } from "react";
import "../index.css";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const Cart: React.FC = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
   removeFromCart,
    showCartPopup,
  } = useContext(CartContext);
console.log("Cart Items:", cartItems);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 200 ? 0 : 30;
  const total = subtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <img
          src="https://via.placeholder.com/200x150?text=Empty+Cart"
          alt="Empty Cart"
        />
        <h2>Your cart is empty 🛒</h2>
        <p>Add some fresh products to start shopping!</p>
        <Link to="/products">
          <button className="checkout-btn full">Browse Products</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {/* Left: Cart Items */}
      <div className="cart-items">
        <h2>Shopping Cart</h2>
        {cartItems.map(item => (
          <div key={item.id} className="cart-card">
            <div className="img-wrapper">
              <img src={item.image} alt={item.name} />
              {item.badge && <span className="badge">{item.badge}</span>}
            </div>

            <div className="cart-info">
              <h4>{item.name}</h4>
              <p className="price">₹{item.price}</p>

              <div className="qty-remove">
                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item.id)}>
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>
                    <FaPlus />
                  </button>
                </div>

                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  <FaTrash /> Remove
                </button>
              </div>
            </div>

            <p className="item-total">₹{item.price * item.quantity}</p>
          </div>
        ))}
      </div>

      {/* Right: Price Summary */}
      <div className="cart-summary">
        <h3>Price Details</h3>

        <div className="price-row">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="price-row">
          <span>Delivery Fee</span>
          <span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
        </div>
        <hr />
        <div className="price-row total">
          <span>Total Amount</span>
          <span>₹{total}</span>
        </div>

        <button className="checkout-btn full">Proceed to Checkout</button>
      </div>

      {/* Popup Animation */}
      {showCartPopup && (
       <div className="cart-popup">
  Item added to cart! <Link to="/cart">View Cart</Link>
</div>
      )}
    </div>
  );
};

export default Cart;
