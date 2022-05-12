import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { MenuItems } from './data';

function Category({src, name, onSetData, itemId}) {

    return (
        <>
            <div className="item menu__category" onClick={() => onSetData(itemId)}>
                <img src={src} alt="buger" />
                <p className='item__name'>{name}</p>
                <span> <FaArrowLeft />  </span>
            </div>
        </>
    )
}

function Menu({onSetData}) {
    const Categories = MenuItems;
    return (
        <div className='menu'>
            <p className="menu__title">Menu Category</p>
            <div className="menu__item">
                {
                    Categories.map(item => (
                        <Category 
                            key={item.itemId} 
                            src={item.imgSrc} 
                            itemId={item.itemId} 
                            name={item.name} 
                            onSetData={onSetData}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Menu;