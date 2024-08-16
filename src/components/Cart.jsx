import React from "react";
import SingleProduct from "./SingleProduct";

const Cart = ({ cart, setCart }) => {
  // Calculate the total price based on the cart items
  const total = cart.reduce((acc, curr) => acc + Number(curr.price), 0);

  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: Rs. {total}</span>
      <div className="productContainer">
        {cart.length > 0 ? (
          cart.map((prod) => (
            <SingleProduct
              prod={prod}
              key={prod.id}
              cart={cart}
              setCart={setCart}
            />
          ))
        ) : (
          <span>Your cart is empty</span>
        )}
      </div>
    </div>
  );
};

export default Cart;
