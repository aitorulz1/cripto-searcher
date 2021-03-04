import React from 'react';

import './Cotizacion.css';

export default function Cotizacion({resultado, verli}) {
    return (
        <div className="resultado">
        {verli ?

            <div className="resultado-container">
                <ul className="left">
                    <li>Change 24h: </li>
                    <li>Change Day: </li>
                    <li>Change / Hour: </li>
                    <br/>
                    <li>Max. Day: </li>
                    <li>Min. Day: </li>
                    <br/>
                    <li>Price: </li>
                    <br/>
                </ul> 
                
                <ul className="right">
                    <li>{resultado.CHANGE24HOUR}</li>
                    <li>{resultado.CHANGEDAY}</li>
                    <li>{resultado.CHANGEHOUR}</li>
                    <br/>
                    <li>{resultado.HIGHDAY}</li>
                    <li>{resultado.LOWDAY}</li>
                    <br/>
                    <li>{resultado.LOWDAY}</li>
                    <br/>
                </ul> 
            </div>

            : null

        }
                
        </div>
    )
}
