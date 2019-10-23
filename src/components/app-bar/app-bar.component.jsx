import React from 'react';

import '../../index.scss';
class AppBar extends React.Component {
    constructor(props) {
        super(props)
        this.state= {open:false};
    }

    handleClick =()=> (
      
        this.setState({open: !this.state.open})
    )

    


    render() {

        return(

            <div className="app-bar"> 
            <div className="container bar">
                <div className="logo"> Logo </div>
                <div className="hamburger" onClick={this.handleClick}>
                        <div className="line"> </div>
                        <div className="line"> </div>
                        <div className="line"> </div>
    
                </div>
                <div className={ this.state.open ? "nav-box open" : "nav-box"} >
    {/*                 <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Our Process</a>
                    <a href="#">Contact</a> */}    
    
                   
                    <div>Home</div>
                    <div>About</div>
                    <div>Projects</div>
                    <div>Our Process</div>
                    <div>Contact</div>                   
                </div>
             </div>        
        </div>

        );
    }
}

export default AppBar;