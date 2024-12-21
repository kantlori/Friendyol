import React, { useState } from 'react';
import "./Hamburger-menu.css"

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
        console.log('Hamburger menüye tıklandı!', isOpen ? 'Kapandı' : 'Açıldı');
    };

    return (
        <div style={styles.container} onClick={handleMenuClick}>
            <div className="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div style={styles.text}>Tüm Ürünler</div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    },
    text: {
        marginLeft: '10px',
        fontSize: '16px',
        fontWeight: 'bold',
    },
};

export default HamburgerMenu;