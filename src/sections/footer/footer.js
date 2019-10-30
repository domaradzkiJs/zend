import React from 'react';
import '../../index.scss';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import { animateScroll as scroll } from "react-scroll";

const styl = {
       
    color:'#354458',    
    fontSize: '6em'
}

class Footer extends React.Component{
    constructor(props){
        super(props)

    }
    scrollToTop = ()=> {
        scroll.scrollToTop();
    };
    render() {
        return (
            <div className="footer">
            <div className="bg-circle" onClick={this.scrollToTop}>
            <ExpandLessIcon style={styl}/>
            </div>
    
            <div className="options container">
                <div className="footer-logo">
                    LOGO here
                </div>
                <div className="by-me"><p>&copy; 2019 Paweł Domaradzki</p></div>
                <div className="social-media">
                    <LinkedInIcon/>
                    <FacebookIcon/>
                    <InstagramIcon/>
                </div>
            </div>
            
    
    
        </div>

        )
    }
}



export default Footer;