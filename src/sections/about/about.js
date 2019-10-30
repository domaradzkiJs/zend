import React from 'react';
import Text from '../../components/text/text.component';
import '../../index.scss';
import CustomIcon from '../../components/custom-icon/custom-icon.component';

import Data from '../../page-content';





class About extends React.Component {
    constructor(props) {
        super(props)
        this.state= {info: Data};
    }

    
    render() {
        const data = this.state.info[0].about;
        console.log(this.state.info[1].sectionStarters[0].heading);
        return(
        <div id='about'>
            <Text title={this.state.info[1].sectionStarters[0].heading} paragraph={this.state.info[1].sectionStarters[0].paragraph}/>
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

export default About;