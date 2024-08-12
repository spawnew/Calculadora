import React from 'react'
import '../App.css'
const Botonclear = (props) => {
  return (
    <div className='clear ' onClick={() => props.borrado(props.children)}>
      
      
  
    Clear
    
      
       
    </div>
  )
}

export default Botonclear;
