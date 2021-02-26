import React, { Fragment, useState } from 'react';

import './useMoneda.css';

 const useMoneda = (label, stateInicial, opciones) => {

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
                        <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                    ))}

            </select>
        </Fragment>


);
        


    return [state, Seleccionar, actualizarState];


}


export default useMoneda;