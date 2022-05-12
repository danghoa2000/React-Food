import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import avatar from '../img/avatar.png'
import logo from '../img/logo.png'

const Header = () => {
    return (
        <section className='header'>
            <img src={logo} alt="logo" />
            <div className="input-search">
                <div className="icon"><FaSearch /></div>
                <input type="text" />
            </div>
            <div className="card"><FaShoppingCart /><span>2</span></div>
            <div className="profile">
                <img src={avatar} alt="avatar" />
                <span className='profile__name'>Hello</span>
            </div>
        </section>
    );
}

export default Header;