import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import '../../index.scss';
class AppBar extends React.Component {
    constructor(props) {
        super(props)
        this.state= {open:false};
    }

    handleClick =()=> (
      
        this.setState({open: !this.state.open})
    )

    scrollToTop = ()=> {
        scroll.scrollToTop();
    };

  


    render() {

        return(

            <div className="app-bar"> 
            <div className="container bar">
                <div className="logo" onClick={this.scrollToTop}> Logo </div>
                <div className="hamburger" onClick={this.handleClick}>
                        <div className="line"> </div>
                        <div className="line"> </div>
                        <div className="line"> </div>
    
                </div>
                <div className={ this.state.open ? "nav-box open" : "nav-box" } >
     
    
                   
                    <div className="nav-item">
                    <Link  onClick={this.handleClick}
                         activeClass="active" 
                         to="home" 
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={500}>
                    
                        Home
                        </Link>
                        </div>
                    <div className="nav-item">
                         <Link  onClick={this.handleClick}
                         activeClass="active" 
                         to="about" 
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={500}>
                    
                    About 
                     </Link></div>
                    <div className="nav-item">
                    <Link onClick={this.handleClick}
                         activeClass="active" 
                         to="projects" 
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={500}>
                                 Projects
                   
                     </Link>
                        </div>
                    <div className="nav-item">
                    <Link onClick={this.handleClick}
                         activeClass="active" 
                         to="process"
                         spy={true}
                         smooth={true}
                         offset={-100}
                         duration={500}>
                                Our Process
                   
                     </Link>
                        </div>
                    <div className="nav-item">
                    <Link onClick={this.handleClick}
                         activeClass="active" 
                         to="contact"  
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}>
                               Contact
                   
                     </Link>
                        </div>                   
                </div>
             </div>        
        </div>

        );
    }
}

export default AppBar;