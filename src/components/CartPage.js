import { useEffect, useState } from 'react'

import './CartPage.css';

export const CartPage = () => {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? [JSON.parse(saved)] : [];
  });
  console.log(products)
  return (
    <div className='cart-container'>
      <ul>
        {products && products.map((product) => (
          <li className='cart-item' key={product.id}>
            <span className="product-details">
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
            </span>
            <button className='btn btn-danger remove-btn'>Remove</button>
          </li>
        ))}
        {products.length === 0 && <p>Your cart is empty</p>}
      </ul>
    </div>
  )
}
