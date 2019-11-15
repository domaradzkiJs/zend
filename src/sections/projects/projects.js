import React from 'react';
import Data from '../../page-content';
import Text from '../../components/text/text.component';
import Gallery from '../../components/gallery/gallery.component';
import Btn from '../../components/button/button.component';
import '../../index.scss';

class Projects extends React.Component{
    constructor(props){
        super(props);
  

        this.state= {
            data: Data,            
            input: '',
            buttons: ["All","houses","apartments"],
            values: ["", "house", "apartment"]
        };
    }

    handleClick = e =>  this.setState( {input: e.target.value});
    



    render() {
     /*    this.CheckInput(); */
        const sectionTitle = this.state.data[1].sectionStarters[1].heading;
        const sectionParagraph = this.state.data[1].sectionStarters[1].paragraph;
        const sectionHouses =  this.state.data[2].houses;

        const filtered = sectionHouses.filter(el=>el.type.includes(this.state.input));
       
        const { buttons, values, input } = this.state;
        return(
            <div id="projects">
            <Text title={sectionTitle} paragraph={sectionParagraph} />
            <div className='buttons-wrap'>
               { buttons.map((btn,i)=>(
                   <Btn key={i} handleClick={this.handleClick} names={btn} value={values[i]} input={input}/>
                ))}
            </div>
         
            <Gallery  links={filtered}/>
       
            </div>

            
        )
    }
    
}

export default Projects;