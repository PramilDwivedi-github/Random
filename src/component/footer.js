import React from 'react';
import './Footer.css';
import {GoLocation} from 'react-icons/go';
import {GrPhone} from 'react-icons/gr';
import {AiOutlineMail} from 'react-icons/ai';
import {FiInstagram,FiTwitter,FiFacebook} from 'react-icons/fi';

const Footer = ()=>{
    return <div id="foot">
            <div id="foot1">
                <div class="footCard">
                    <h3>Sytra</h3>
                    <div>kjsndlaknslkamsuwdskjdskjdnlsksdass</div>
                    <div>jsdnslkdnlkdnsldknslkdnslkdnsldksndlskd</div>
                    <div>slkndlskdnsldknslkdnslkdnslkdnsldknslsk</div>
                    <div><FiTwitter class="socialMedia"/><FiFacebook class="socialMedia"/><FiInstagram class="socialMedia"/></div>
                </div>
                <div class="footCard">
                    <h4>Information</h4>
                    <div>About us</div>
                    <div>Service</div>
                    <div>Our Team</div>
                    <div>Contact</div>
                </div>
                <div class="footCard">
                    <h4>Contact Us</h4>
                    <div><GoLocation class="contactIcons"/> 46 altar street Near Gateway of India 
                    Mumbai ,Maharashtra</div>
                    <div><GrPhone class="contactIcons"/> 9760295321</div>
                    <div><AiOutlineMail class="contactIcons"/> abc@gmail.com</div>
                </div>
                <div class="footCard">
                    <h4>Newsletter</h4>
                    <div>alklsnalwkndlknwouiewfiuehuwifhe</div>
                    <div>alklsnalwkndlknwouiewfiuehuwifhe</div>
                    <div>alklsnalwkndlknwouiewfiuehuwifhe</div>
                    <input type="email" placeholder="Your email address"></input>
                </div>
            </div>
        <div id="foot2">
            <div id = "copyright"> copyright@ Harshit</div>
            <div id="LegalInfo">Terms of service    Privacy Policy  Legal</div>
        </div>
    </div>;
}

export default Footer;

