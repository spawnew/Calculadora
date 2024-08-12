import React from 'react';

const Boton = (props) => {
  return (
    <div className='boton'>
      <button onClick={() => props.tocarboton(props.children)}>
        {props.children}
      </button>
    </div>
  );
};

export default Boton;
//props.tocarboton( props.children) por que necesita el valor del boton
//ejemplo cuando tocas el 7 ese es props.children .
//()=> el evento onclick llama a la funcion solo cuando se toca el boton
//props.tocarboton(props.children) sino le agragas el ()=> se llama directo a  la funcion cuando se reenderiza el componente