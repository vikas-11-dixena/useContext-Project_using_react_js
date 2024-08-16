import React from 'react';

const SingleProduct = ({ prod, cart, setCart }) => {
  const isInCart = cart.includes(prod);

  return (
    <div className='products'>
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>₹ {Number(prod.price).toFixed(2)}</span> {/* Properly formatted price */}
      </div>
      {isInCart ? (
        <button
          className='add'
          onClick={() => {
            setCart(cart.filter(c => c.id !== prod.id));
          }}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className='add'
          onClick={() => {
            setCart([...cart, prod]);
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
