import React from 'react';
import { useState } from 'react';

const Contador = () => {

    const [numero, setNumero] = useState(0);
    const [contador , setContador] = useState(0)

    let numeroAleatorio = (a,b)=>{
        return Math.floor(Math.random()*(b-a +1))+a;
    }

    function mostrarnumeros(params) {
        const intervalId = setInterval(() => {
            setContador(contador+1)
            if (true) {
                clearInterval(intervalId)
            }
            
        }, numeroAleatorio(5000,10000));
    }

    mostrarnumeros()

    const condicional = numero<0  ? 'menor':'mayor'
     

    return (
        <div className='container-contador'>
        <h1 class={condicional}>Contador: {numero}</h1>

        <div>
            <button onClick={()=>{setNumero(numero+1)}} >Aumentar</button>
            <button onClick={()=>{setNumero(numero-1)}} >Disminuir</button>
        </div>


        <h2>Usuarios activos: {contador}</h2>

       </div>
    );
}

export default Contador;
