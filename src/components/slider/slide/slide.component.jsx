import React from 'react';
import '../../../index.scss';
const Slide = ({img}) =>  (
    <div className="slide-item" style={{backgroundImage: `url(${img})`}}></div>
)

export default Slide;