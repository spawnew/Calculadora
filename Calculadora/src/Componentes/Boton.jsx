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
