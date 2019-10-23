import React from 'react';

import '../../App.css';
import '../../index.scss';
import AppBar from '../../components/app-bar/app-bar.component';
import landingImg from '../../assets/house/front.jpg';

import FavoriteIcon from '@material-ui/icons/Favorite';


const content = {
    
    boxSizing: 'border-box',
    padding: '0 4em 1em 4em',
    backgroundColor: 'rgba(119, 196, 246,0.2)',
    color: 'white',
    width:'100%',
    height: '100% ',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center'
    

}

const Header = ()=> (
    <div>
    <AppBar/>
        
            <div className="landing-image" style={{backgroundImage: `url(${landingImg})`}}>
                    <div className="overlay" style={content}>
                   
                        <div className="sub-title"> We build houses with <span> <FavoriteIcon/> </span></div>
                        <div className="big-bold-title" > To make your <span>dreams</span> come true </div>
                        <div className="landing-description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna dui, mollis ac lacinia sit amet, viverra quis justo.  Duis elementum tincidunt nisl vitae feugiat. Fusce eu magna mattis, tincidunt libero nec, lacinia sem.</div>
                        <button> Projects </button>
                </div>
            </div>
            
        
    </div>
)

export default Header;

