import React from 'react';
import Text from '../../components/text/text.component';
import '../../index.scss';

import Map from '../../components/map/map.component';
const Contact =()=> (
    <div id="contact">
        <div className='contact'>
            <div className="headings">
                <h3>Call</h3>
                <p>333-333-333</p>
            </div>
            
            <Text title='Contact Us'/>
            <div className="headings">
                <h3>Write</h3>
                <p>zend@constructions.com</p>
            </div>
        </div>

        <Map/>
    </div>

)

export default Contact;