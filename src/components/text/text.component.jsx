import React from 'react';
import '../../index.scss';
const Text = ({title,paragraph, style, colh1})=> (
    <div className="text-wrapper" style={style}>
        <h1 style={colh1}>{title}</h1>
        <p>
        {paragraph} 
        </p>

    </div>
)

export default Text;