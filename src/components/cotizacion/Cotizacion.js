import React from 'react';

import './Cotizacion.css';

export default function Cotizacion({resultado}) {
    return (
        <div className="resultado">
            <ul>
                <li>Change 24h: {resultado.CHANGE24HOUR}</li>
                <li>Change Day: {resultado.CHANGEDAY}</li>
                <li>Change / Hour: {resultado.CHANGEHOUR}</li>
                <br/>
                <li>Max. Day: {resultado.HIGHDAY}</li>
                <li>Min. Day: {resultado.LOWDAY}</li>
                <br/>
                <li>Price: {resultado.LOWDAY}</li>
                <br/>
            </ul>     
        </div>
    )
}
