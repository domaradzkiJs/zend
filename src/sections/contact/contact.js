import React from 'react';
import Text from '../../components/text/text.component';
import './contact.styles.scss';
import Map from '../../components/map/map.component';
const Contact =()=> (
    <div>
        <div className='contact'>
            <p>call</p>
            <Text title='Contact Us'/>
            <p>write</p>       
        
        </div>

        <Map/>
    </div>

)

export default Contact;