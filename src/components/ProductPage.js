import { Link } from 'react-router-dom';
import { useFetch } from './useFetch'; 
import './ProductPage.css';

export const ProductPage = () => {
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
              <button className="add-to-cart">Add to Cart</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
