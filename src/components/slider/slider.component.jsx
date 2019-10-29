import React from 'react';
import Slide from './slide/slide.component';
import './slider.styles.scss';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.state={slidesArr: this.props.arr
                    
        }
    }

    handleShowLast=()=> {
        let last = this.state.slidesArr.pop();
        let addLast = this.state.slidesArr.unshift(last);
        this.setState({
            showItems: addLast
           
        })
    }

    
    handleShowFirst=()=> {
        let first = this.state.slidesArr.shift();
        let addFirst = this.state.slidesArr.push(first);
        this.setState({
            showItems: addFirst
           
        })
    }

    render() {
      
        const items =this.state.slidesArr.slice(0,4).map(
            (slide,i) =>  <Slide key={i} img={slide}/>
        )

        return(
            <div className="slider-wrapper">
                <button onClick={this.handleShowFirst}><ArrowBackIosIcon/></button>
                {items}
                <button onClick={this.handleShowLast}><ArrowForwardIosIcon/></button>
            </div>

        )
    }
}



export default Slider;