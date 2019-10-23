import React from 'react';


import '../../index.scss';
/* const iconBg = {
    width: '300px',
    height: '300px',
    background: 'pink'
} */

const customIcon = props => (
    <div className="icon-bg" /* style={iconBg} */>
        <div className="icon">
         {/* <PeopleAltIcon/>  */}{props.icon}
        </div>
       
    </div>
)

export default customIcon;