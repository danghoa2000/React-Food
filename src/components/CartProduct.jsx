import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';

const CartProduct = ({ cart, dispatch }) => {
    const [total, setTotal] = useState(0)

    useEffect (() => {
        setTotal(cart.reduce(function (accumulator, currentValue) {
            return Number(accumulator) + (Number(currentValue.price) * Number(currentValue.qty));
        }, 0));
    }, [cart]);

    console.log('re-render', cart);
return (
    <div className="cart-item">
        <ul>
            {
                cart.length > 0 && cart.map((item, index) => (
                    <CartItem key={index}
                        item={item} 
                        cart={cart} 
                        index={index}
                        dispatch={dispatch} 
                    />
                ))
            }

        </ul>

        <p>Total: {total}</p>
    </div>
)
};

export default CartProduct;