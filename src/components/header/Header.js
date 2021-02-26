import React from 'react';
import headerImg  from '../../assets/images/cripto-logo.png';

import './Header.css';

export default function Header() {
    return (
        <div className="header-container">
            <img src={headerImg} />
        </div>
    )
}
