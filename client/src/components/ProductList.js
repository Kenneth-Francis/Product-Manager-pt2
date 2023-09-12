import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = (props) => {

    return (
        
        <div className='card shadow'>
            <div className='card-header'>
                <h3 className='text-center text-warning-emphasis'>All Products</h3>
            </div>

            <div className='card-body'>
                <ul className='list-group list-group-flush gap-3'>
                    {
                        props.products.map( (product, idx) => {
                            return (
                                <li key={idx} className='list-group-item fs-6'>
                                    <p className="fs-5 text-center"><Link to={`/products/${product._id}`}>{product.title}</Link></p>
                                    <p className='text-center text-success'>Price: ${product.price}</p>
                                    <p><span className='text-primary-emphasis'>Description:</span> {product.description}</p>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default ProductList;