import React from 'react';
import Data from '../../page-content';
import CustomIcon from '../../components/custom-icon/custom-icon.component';
import Text from '../../components/text/text.component';

class Process extends React.Component {
    constructor(props) {
        super(props)
        this.state= {about: Data}
    }

    render() {
        const sectionStart = this.state.about[1].sectionStarters;
        const data = this.state.about[3].process;
        return ( 
           <div>
            <Text title={sectionStart[2].heading} paragraph={sectionStart[2].paragraph}/>
           
           <div className="container set">

            {   data.map(el=>(   <div className="ic-section" key={el.id}>
               
               <CustomIcon icon={el.icon}/>
               <h3>{el.heading}</h3>
               <p>{el.paragraph}</p>

           </div> ) )}

           </div>
           </div>
        )
    }        
    
}

export default Process;