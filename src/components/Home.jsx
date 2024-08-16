import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import SingleProduct from './SingleProduct';
import './Style.css';

faker.seed(100);

const Home = () => {
    const productArray = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.imageUrl()
    }));
    
    const [cart, setCart] = useState([]);
    const [products] = useState(productArray);
    console.log(cart);
    

  return (
    <div className='productContainer'>
      {products.map((prod => (
        <SingleProduct prod={prod} cart={cart} setCart={setCart} />
      )))}
    </div>
  )
}

export default Home
