import React from 'react'
import { useParams } from 'react-router-dom'

import './ProductDetail.css'
import { useFetch } from './useFetch'

export const ProductDetail = () => {
    const { id } = useParams();

    return (
        <div className='product-detail'>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} />
            <button className='add-to-cart'>Add to Cart</button>
        </div>
    )
}
