import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import './ProductPage.css';

export const ProductPage = () => {
  const [products,setProducts] = useState([])

  useEffect(() =>{
    const fetchProducts = async () => {
      const data = await fetch('https://fakestoreapi.com/products').then(response => response.json());
      setProducts(data);
    }
    fetchProducts();
  },[])

  return (
    <div className="product-page">
      <ul>
        {products && products.map((product) => (
          <li className="product-item" key={product.id}>
            <Link to={`/product/${product.id}`} className="product-item-link">
              <h2>{product.title}</h2>
              <p>{product.description.slice(0, 100)}...</p>
              <p><strong>${product.price}</strong></p>
              <img src={product.image} alt={product.title} />
              <button className="add_to_cart">Add to Cart</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
