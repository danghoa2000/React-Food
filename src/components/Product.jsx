import React, { useState } from 'react';
import { FaArrowLeft, FaHeart } from 'react-icons/fa';

function Product({ item, dispatch, cart }) {
    const [isFavourite, setFavourite] = useState(false)
    const setCart = () => {
        let newCart = [...cart, item];
        dispatch({
            type: 'SET_CART',
            cart: newCart,
        })
    }
    return (
        <div className={`item product-item ${isFavourite ? 'active' : ''}`}>
            <img src={item.imgSrc} alt="buger" />
            <p className='item__name'>{item.name}</p>
            <p className="price">${item.price}</p>
            <span className='add'> <FaArrowLeft onClick={setCart} />  </span>
            <span className='heart'> <FaHeart onClick={() => setFavourite(!isFavourite)} />  </span>
        </div>
    );
}

export default Product;