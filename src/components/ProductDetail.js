import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './ProductDetail.css'
import styles from './Product.module.css'


export const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([])
    useEffect(() => {
        const fetchProduct = async () => {
            const data = await fetch(`https://fakestoreapi.com/products/${id}`).then(response => response.json());
            setProduct(data);
        }
        fetchProduct();
    });

    return (
        <div className='product-detail'>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} />
            <button className={styles.add_to_cart}>Add to Cart</button>
        </div>
    )
}
