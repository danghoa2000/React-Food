import React from 'react';
import Product from './Product';

const ProductList = ({ products, dispatch, cart }) => {
  return (
    <div className="menu__item">
      {
        products.map(item => (
          <Product
            key={item.id}
            item={item}
            cart={cart}
            dispatch={dispatch}
          />
        ))
      }
    </div>
  )
};

export default ProductList;