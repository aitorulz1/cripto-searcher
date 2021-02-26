import React, { Fragment, useState } from 'react';

 const useCriptomoneda = (label, stateInicial, opciones) => {

    const [ state, actualizarState ] = useState(stateInicial);

    const Seleccionar = () => (

        <Fragment>
            <label className='label-title'>{label}</label>
            <select
                onChange = { e => actualizarState(e.target.value) }
                value = {state}
            >

                <option value=''>-- Select --</option>
                
                    {opciones.map(opcion => (
                        <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                    ))}

            </select>
        </Fragment>


);
        


    return [state, Seleccionar, actualizarState];


}


export default useCriptomoneda;