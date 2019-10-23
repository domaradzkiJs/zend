import React from 'react';
import '../../index.scss';

const Gallery =({links})=> (

    <div className="gallery-container">

        {links.map(el=>(

            <div key={el.id} className="gallery-img" style={{backgroundImage:`url('${el.image}')`}}>

            </div>
           

        ))}
       
 


    </div>

)

export default Gallery;