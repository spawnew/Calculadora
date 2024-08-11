
import Boton from './Componentes/Boton'
import './App.css'
import Pantalla from './Componentes/Pantalla'
function App() {
const tocarboton=() => {
  console.log("toy tocando el 7")
}

  return (
    
      <div className='container'>
        <div className='calculadora'>
        
        <Pantalla
        input="999" />
           
          
          
          
        
        
       
        <div className='fila'>
        <Boton
        tocar={tocarboton}
           >
          7
        </Boton>
        <Boton>
          8
        </Boton>
        <Boton>
          9
        </Boton>
        <Boton>
          x
        </Boton>
        
       
        </div>
        <div className='fila'>
        <Boton>
           
          4
        </Boton>
        <Boton>
          5
        </Boton>
        <Boton>
          6
        </Boton>
        <Boton>
          -
        </Boton>
        
       
        </div>
        <div className='fila'>
        <Boton>
           
          1
        </Boton>
        <Boton>
          2
        </Boton>
        <Boton>
          3
        </Boton>
        <Boton>
          +
        </Boton>
        
       
        </div>
        <div className='fila'>
        <Boton>
           
          0
        </Boton>
        <Boton>
          .
        </Boton>
        <Boton>
          =
        </Boton>
        <Boton>
          /
        </Boton>
        
       
        </div>
       
        
        </div>
        </div>
        
    
  )
}

export default App
