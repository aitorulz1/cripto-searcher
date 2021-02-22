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
    },[])

    return (
        <form>

            <UseMoneda />

            <UseCriptomoneda />

            <input
                type='submit'
                className='button'
                value= 'Calcular'
            />
        </form>
    )
}

export default Formulario;