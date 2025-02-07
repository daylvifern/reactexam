import "./Products.css"
import React, { useEffect, useState } from 'react';
function Products() {
 
  const [data, setData] = useState([]);

  async function fetchData() {
    const data = await fetch('https://fakestoreapi.com/products');
    const result = await data.json();
    setData(result);
   
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='container'>
      {data.map((item) => (
        <div className='main' key={item.id}>
          <div>
            <img src={item.image} alt='' />
            <p>{item.title}</p>
            <h3>{item.price}</h3>
            <button>Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Products
