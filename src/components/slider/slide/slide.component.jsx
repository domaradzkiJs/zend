import React from 'react';
import './slide.styles.scss';
const Slide = ({img}) =>  (
    <div className="slide-item" style={{backgroundImage: `url(${img})`, height:'360px', width:'50%'}}></div>
)

export default Slide;