import React from 'react';
import '../../index.scss';

const Btn = ({names,handleClick,value, input}) => (
   
        <button  onClick={handleClick} value={value}  className={input===value ? 'btn-selected' : 'btn' } >{names}</button>

   
)
export default Btn;