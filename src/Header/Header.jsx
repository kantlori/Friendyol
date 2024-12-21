import React, { useState } from 'react';
import FriendyolLogo from "../assets/friend-yol-logo.svg"
import "./Header.css"
import HamburgerMenu from './Hamburger-menu.jsx';
import HeaderCategory from './Categorry.jsx';
import headerSahteVeri from '../FakeData/Header-categories.js';


function Header() {
    const [searchQuery, setSearchQuery] = useState("");

    // Arama butonuna tıklama işlemi
    const handleSearch = () => {
        if (searchQuery.trim()) {
            console.log(`Arama yapılıyor: ${searchQuery}`);
        } else {
            console.log("Lütfen bir arama terimi girin.");
        }
    };

    // Login Icon
    const LoginIcon = () => (
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '16px', fontWeight: '500' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v10M19 9l-7 7-7-7" />
            </svg>
            <span style={{ marginLeft: '8px' }}>Giriş Yap</span>
        </div>
    );

    // Favori List Icon
    const FavoritesIcon = () => (
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '16px', fontWeight: '500' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span style={{ marginLeft: '8px' }}>Favorilerim</span>
        </div>
    );

    //User Login Icon
    const CartIcon = () => (
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '16px', fontWeight: '500' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 6h15l-1.68 9H7.68L6 6zM7 20h13a2 2 0 0 0 2-2H5a2 2 0 0 0 2 2z" />
            </svg>
            <span style={{ marginLeft: '8px' }}>Sepetim</span>
        </div>
    );



    return (
        <div className="header">
            <div className='top-right'>
                <ul className='header-top-nav'>
                    <li><a>İndirim Kuponlarım</a></li>
                    <li><a>Friendyol'da Satış Yap</a></li>
                    <li><a>Hakkımızda</a></li>
                    <li><a>Yardım & Destek</a></li>
                </ul>
            </div>
            <div className="header-main">
                <a id="logo" href="/" title='Friendyol'>
                    <img src={FriendyolLogo} alt="Friendyol Logo" />
                </a>
                <div className="search">
                    <input
                        type="text"
                        autoComplete="off"
                        placeholder="Aradığınız ürünü yazınız"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="search-icon" onClick={handleSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M23 21l-6-6m-5 1a7 7 0 1 0-7-7 7 7 0 0 0 7 7z" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="for-user">
                    <LoginIcon />
                    <FavoritesIcon />
                    <CartIcon />
                </div>
            </div>
            <div className="header-bottom">
                <div className="all-categories">
                    <HamburgerMenu />
                </div>
                <div className="categories">
                    <ul>
                        {headerSahteVeri.map((item, index) => (
                            <HeaderCategory key={index} item={item} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header