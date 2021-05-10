import React from 'react';
import './iconRegion.css';
import {IoDocumentTextOutline} from 'react-icons/io5';
import {IoIosGlobe} from 'react-icons/io';
import {IoTrophyOutline} from 'react-icons/io5';
import {RiTeamLine} from 'react-icons/ri';

const IconRegion = ()=>{
    return <div id="iconReg">
        <div class="ic">
            <div class="round">
                <IoDocumentTextOutline class="reactic"/>
            </div>
            <h3>100%</h3>
            <h4>Projects Completed</h4>
        </div>
        <div class="ic">
            <div class="round">
                <IoIosGlobe class="reactic"/>
            </div>
            <h3>100+</h3>
            <h4>Trusted Clients</h4>
        </div>
        <div class="ic">
            <div class="round">
                <IoTrophyOutline class="reactic"/>
            </div> 
            <h3>100+</h3>
            <h4>Awards and Recognition</h4>
        </div>
        <div class="ic">
            <div class="round">
                <RiTeamLine class="reactic"/>
            </div>
            <h3>50+</h3>
            <h4>Professional Team</h4>
        </div>
    </div>;
}

export default IconRegion;