import React from 'react'

const Boton = (props) => {
  return (
    <div className='boton'>
        <button  onClick={props.tocar}>
        {props.children}
        </button>
        
      
    </div>
  )
}

export default Boton;
