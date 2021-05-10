import React from 'react';
import './header.css';

const Header = ()=>{
    return <div id = "head">
        <div id = "nav">
            <div id = "nav1">
                <h1 id = "Logo">Sytra</h1>
            </div>
            <div id="nav2">
                <h6>progress</h6>
                <h6>service</h6>
                <h6>blog</h6>
                <h6>contact</h6>
                <h6>home</h6>
            </div>   
        </div>
        <div id = "about">
            <h2>About Us</h2>
            <h6>{'Home >'}</h6>
            <h6>About us</h6>
        </div>
        <div id ="wave1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L60,154.7C120,181,240,235,360,218.7C480,203,600,117,720,101.3C840,85,960,139,1080,144C1200,149,1320,107,1380,85.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        </div>
    </div>;
}
export default Header;