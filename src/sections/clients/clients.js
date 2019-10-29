import React from 'react';

import '../../index.scss';
import Text from '../../components/text/text.component';
import Data from '../../page-content';
import Slider from '../../components/slider/slider.component';

const Clients = () => (
    <div>
    <div className="bg-photo">
        <Text title={Data[1].sectionStarters[3].heading} colh1={{color:'#cef6ff'}} style={{margin:'1em auto 0 auto', padding:'30px', color:'white'}} paragraph={Data[1].sectionStarters[3].paragraph} />
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
    <div className="container">
        <Text title={Data[1].sectionStarters[4].heading} />
        <Slider arr={Data[4].slider}/>
    </div>
    </div>
)

export default Clients;