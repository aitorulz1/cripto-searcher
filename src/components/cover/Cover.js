import React, { useState, useEffect } from 'react';

export default function Cover() {

    

    var array = [
        'Bitcoin',
        'Criptomonedas',
        'Ethereum',
        'Ripple',
        'Dash',
        'LiteCoin'
    ];

    const [length, setLength] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLength(length => (length === 5 ? 0 : length + 1));
        }, 500)

    }, [])

    return (
        <div className="cover-container">

            {array[length]}
            
        </div>
    )
}
