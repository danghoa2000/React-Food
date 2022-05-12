import React from 'react';
import { useEffect } from 'react';

const CartItem = ({ item, dispatch, cart, index }) => {

  useEffect(() => {
    item.qty = 1;
  }, [item])
  const handleUpdate = (type, index1) => {
    let newCart = [...cart];
    if (type === 'remove') {
      if (item.qty === 1) {
        newCart.splice(index1, 1)
      } else {
        newCart[index1].qty -= 1;
      }
    } else {
      newCart[index1].qty += 1;
    }

    dispatch({
      type: 'SET_CART',
      cart: newCart
    })
  }

  return (
    <div className="d-flex justify-content-between p-3 w-100 align-items-center">
      <img src={item.imgSrc} alt="img"></img>
      <span>{item.name}</span>
      <span>x{item.qty}</span>
      <span>${item.price}</span>
      <div>
        <span className="add-item" onClick={() => { handleUpdate('add', index) }}>+</span>
        <span className="remove-item" onClick={() => { handleUpdate('remove', index) }}>-</span>
      </div>
    </div>
  )
};

export default CartItem;