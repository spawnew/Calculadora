
import Boton from './Componentes/Boton'
import './App.css'
import Pantalla from './Componentes/Pantalla'
import { useState } from 'react'
import Botonclear from './Componentes/Botonclear'
import {evaluate} from 'mathjs'

function App() {

const [input, setinput] = useState('')
const tocarboton = valor => {
  setinput(input+valor)
}
const borrado =()=>{
  setinput('');

}
const calcularResultado=()=>{
  setinput(evaluate(input))
}
  return (
    
      <div className='container'>
        <div className='calculadora'>
        
        <Pantalla
        input={input} />
           
       
        <div className='fila'>
        <Boton
         tocarboton={tocarboton}
           >
          7
        </Boton>
        <Boton tocarboton={tocarboton}>
          8
        </Boton>
        <Boton tocarboton={tocarboton}>
          9
        </Boton>
        <Boton tocarboton={tocarboton}>
          x
        </Boton>
        
       
        </div>
        <div className='fila'>
        <Boton tocarboton={tocarboton}>
           
          4
        </Boton>
        <Boton tocarboton={tocarboton}>
          5
        </Boton>
        <Boton tocarboton={tocarboton}>
          6
        </Boton>
        <Boton tocarboton={tocarboton}>
          -
        </Boton>
        
       
        </div>
        <div className='fila'>
        <Boton tocarboton={tocarboton}>
           
          1
        </Boton>
        <Boton tocarboton={tocarboton}>
          2
        </Boton>
        <Boton tocarboton={tocarboton}>
          3
        </Boton>
        <Boton tocarboton={tocarboton}>
          +
        </Boton>
        
       
        </div>
        <div className='fila'>
        <Boton tocarboton={tocarboton}>
           
          0
        </Boton>
        <Boton tocarboton={tocarboton}>
          .
        </Boton>
        <Boton tocarboton={ calcularResultado}>
          =
        </Boton>
        <Boton tocarboton={tocarboton}>
          /
        </Boton>
        
       
        </div>
        <div className='fila'>
        <Botonclear
        borrado={borrado}>
        
        </Botonclear>
        </div>
        </div>
        </div>
        
    
  )
}

export default App
