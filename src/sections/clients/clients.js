import React from 'react';

import '../../index.scss';
import Text from '../../components/text/text.component';
const Clients = () => (
    <div className="bg-photo">
        <Text title='Happy Clients' colh1={{color:'#77c4f6'}} style={{margin:'1em auto 0 auto', padding:'30px', color:'white'}} paragraph=' Pellentesque sagittis, mauris vitae porta cursus, nunc felis vehicula nulla, in aliquam tellus arcu congue sapien. Nullam ac odio massa.' />
        <div className="container opinions">
            <div>
            <blockquote><p className="quotation"> 
            Aliquam felis arcu, tincidunt ut quam ac, hendrerit convallis ante. Maecenas laoreet bibendum lobortis.</p>
                 <footer>— Jonathan Wind</footer>
            </blockquote> 
            </div>

            <div>
            <blockquote><p className="quotation"> 
            Aliquam felis arcu, tincidunt ut quam ac, hendrerit convallis ante. Maecenas laoreet bibendum lobortis.</p>
                 <footer>— Alex Johnson</footer>
            </blockquote> 
            </div>
            
         
             
             
        </div>
    </div>
)

export default Clients;