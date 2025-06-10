import { useState } from 'react'

import './CartPage.css';

export const CartPage = () => {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const handleRemoveItem = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);  
    setProducts(updatedProducts);
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(updatedProducts));
  }
  return (
    <div className='cart-container'>
      <ul>
        {products && products.map((product) => (
          <li className='cart-item' key={product.id}>
            <span className="product-details">
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p className="fw-medium">Price: ${product.price}</p>
            </span>
            <button className='btn btn-primary'>Buy Now</button>
            <button className='btn btn-danger remove-btn' onClick={()=>handleRemoveItem(product.id)}>Remove</button>
          </li>
        ))}
        {products.length === 0 && <p>Your cart is empty</p>}
      </ul>
    </div>
  )
}
