import './TrafficLight.css'
import React from 'react'

function TrafficLight({location, color}){
    {console.log(`Traffic Light in ${location}: ${color}, is red? ${color == 'red' ? 'yes' : 'no'}`)}

    switch(location){
        case "horizontal-upper": 
            return(
                <div className="tl tl-horizontal tl-upper" id='tl-upper'>
                    <div id='tl-upper-red' className={`red ${color == 'red' ? 'red-active' : ''}`}></div>
                    <div id='tl-upper-green' className={`green ${color == 'green' ? 'green-active' : ''}`}></div>
                </div>
            )
        case "horizontal-down": 
            return(
                <div className="tl tl-horizontal tl-down" id='tl-down'>
                    <div id='tl-down-green' className={`green ${color == 'green' ? 'green-active' : ''}`}></div>
                    <div id='tl-down-red' className={`red ${color == 'red' ? 'red-active' : ''}`}></div>
                </div>
            )
    
        case "vertical-left":
            return(
                <div className="tl tl-vertical tl-left" id='tl-left'>
                    <div id='tl-left-green' className={`green ${color == 'green' ? 'green-active' : ''}`}></div>
                    <div id='tl-left-red' className={`red ${color == 'red' ? 'red-active' : ''}`}></div>
                </div>
            )
    
        case "vertical-right":
            return(
                <div className="tl tl-vertical tl-right" id='tl-right'>
                    <div id='tl-right-red' className={`red ${color == 'red' ? 'red-active' : ''}`}></div>
                    <div id='tl-right-green' className={`green ${color == 'green' ? 'green-active' : ''}`}></div>
                </div>
            )
        default: 
            console.log("Couldn't find location");
            break;
    }
}
export default TrafficLight