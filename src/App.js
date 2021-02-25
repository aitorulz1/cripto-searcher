import React, { useState, useEffect } from 'react';

import './App.css';
import Cover from './components/cover/Cover';
import Header from './components/header/Header';
import Formulario from './components/formulario/Formulario';
import Cotizacion from './components/cotizacion/Cotizacion';
import Spinner from './components/spinner/Spinner';

import axios from 'axios';

function App() {

  const [moneda, guardarTipoMoneda] = useState('');
  const [cripto, guardarTipoCripto] = useState('');

  const [resultado, guardarResultado] = useState({});

  const [cargando, guardarCargando] = useState(false);

  const [verpagina, guardarVerPagina] = useState(false)

  useEffect(() => {

    // evitamos la ejución la primera vez
    if(moneda === '') return;

    const resultadoApi = async () => {

      // consultar la api para obtener la cotización
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
  
      const resultado = await axios.get(url);

      // mostrar el Spinner
      guardarCargando(true);

      // ocultar el Spinner
      setTimeout(() => {
        guardarCargando(false);
        guardarResultado(resultado.data.DISPLAY[cripto][moneda]);
      },3000)
  
      

    } 
    resultadoApi();

  }, [moneda, cripto])

  const componente = (cargando) ? <Spinner /> : <Cotizacion resultado={resultado} />

  return (
    <div>
        {!verpagina
        ?
        (
          <Cover 
          
          guardarVerPagina={guardarVerPagina}
        

        />
        )
        :
        (
          <div>

            <Header />
            
            <Formulario 
              guardarTipoMoneda={guardarTipoMoneda}
              guardarTipoCripto={guardarTipoCripto}
              guardarCargando={guardarCargando}
            />

            {componente}
          
          </div>)
        }
        

        


    </div>
  );
}


export default App;
