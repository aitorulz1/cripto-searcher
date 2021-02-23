import React, { useEffect, useState } from 'react';

import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';

    const Formulario = () => {

    const MONEDAS = [
        {código: 'USD', nombre: 'Dólar de EEUU'},
        {código: 'MXN', nombre: 'Peso Mejicano'},
        {código: 'EUR', nombre: 'Euro'},
        {código: 'GBP', nombre: 'Libra Esterlina'}
        
    ]

    const [ error, guardarError ] = useState(false)

    const [ listadocripto, guardarListadoCripto ] = useState([]);

    const [ moneda, UseMoneda ] = useMoneda('Elije tu moneda', '', MONEDAS);
    const [ criptomoneda, UseCriptomoneda ] = useCriptomoneda('Elije tu moneda Criptomoneda', '', listadocripto);

    useEffect( () => {
        const consultarApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            guardarListadoCripto(resultado.data.Data)
        } 
        consultarApi()
    },[]);


    const turnOff = () => {
        guardarError(false)
    }


    // Cuando el usuario hace submit
    const cotizarMoneda = e => {
        e.preventDefault();

        if(moneda === '' || criptomoneda === '') {
            guardarError(true);
            return;
        }

        guardarError(false);
    }

    return (
        <form
            onSubmit={cotizarMoneda}
        >

        {error ? <div className="">Debe selecionar ambos valores</div> : null}

            <UseMoneda />

            <UseCriptomoneda />

            <button
                type='submit'
                className='button'
                value= 'Calcular'
                onclick={setTimeout(turnOff, 3500)}
            >Calcular</button>
        </form>
    )
}

export default Formulario;