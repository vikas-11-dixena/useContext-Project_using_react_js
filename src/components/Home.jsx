import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";
import "./Style.css";

faker.seed(100);

const Home = ({ cart, setCart }) => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: Number(faker.commerce.price()), // Convert price to number
    image: faker.image.imageUrl(),
  }));

  const [products] = useState(productArray);

  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct
          prod={prod}
          cart={cart}
          setCart={setCart}
          key={prod.id}
        />
      ))}
    </div>
  );
};

export default Home;
