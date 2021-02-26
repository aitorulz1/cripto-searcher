import React, { useState, useEffect } from 'react';

import logo from '../../assets/images/cripto-logo.png'
import './Cover.css';

export default function Cover({guardarVerPagina}) {

    
    var array = [
        'Bitcoin',
        'Ethereum',
        'XRP',
        'Binance Coin',
        'Cardano',
        'Tether',
        'Polkadot',
        'Chainlink',
        'Uniswap',
        'Stellar'
    ];

    const [length, setLength] = useState(0);

    const pasar = () => {
        guardarVerPagina(true)
    }

    useEffect(() => {
        setInterval(() => {
            setLength(length => (length === 9 ? 0 : length + 1));
        }, 750)

    }, [])



    return (
        <div className="cover-container">

            <div className="cover-content">

                <div className="logo-container">
                    <img src={logo} />
                    <div className="title">
                        by wewebs
                    </div>
                </div>

                <div className="cripto-types-container">
                    <div className="cripto-types-intro">
                        We Do Work Just With the Best Ones!
                    </div>
                    <div className="cripto-types-rabdom">
                        {array[length]}
                    </div>
                    <div className="cripto-types-after">
                        Because we know what our customers are looking for, wewebs only works with the most valuable criptos in the market!!
                    </div>
                </div>

                <div className="cripto-button-container">
                    <button
                        className="begin"
                        value='Comenzar'
                        onClick={pasar}
                    >HAVE A LOOK</button>
                </div>

            </div>

            
        </div>
    )
}
