import React, { useState, useEffect } from 'react';

export default function Cover() {

    const [ concept, setConcept ] = useState([]);

    var array = [
        'Bitcoin',
        'Criptomonedas',
        'Ethereum',
        'Ripple',
        'Dash',
        'LiteCoin'
    ];

    const randomConcept = () => (
        array[Math.floor(Math.random)*array.length]
    )

    setConcept(randomConcept)

    return (
        <div className="cover-container">

            {concept}
            
        </div>
    )
}
