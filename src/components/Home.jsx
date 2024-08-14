import React, { useState } from 'react'
import faker from 'faker'

const Home = () => {
    const productArray = [...Array(20)].map(() => ({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.Price(),
        image:faker.random.image()
    }));
    
    const [products] = useState(productArray)

  return (
    <div className='productContainer'>
      {products.map((prod => (
        <span>{prod.name}</span>
      )))}
    </div>
  )
}

export default Home
