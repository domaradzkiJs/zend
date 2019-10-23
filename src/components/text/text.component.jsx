import React from 'react';
import '../../index.scss';
const Text = ({title,paragraph})=> (
    <div className="text-wrapper">
        <h2>{title}</h2>
        <p>
        {paragraph} 
        </p>

    </div>
)

export default Text;