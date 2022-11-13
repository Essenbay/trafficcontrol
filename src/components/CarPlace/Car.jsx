import './Car.css'
import React from 'react'
function Car({key, location}){
    switch(location){
        case "horizontal-upper": 
            return(
                <div className="car car-horizontal" key={key}>
                    <div className="car-image horizontal-upper-rotation"></div>
                </div>)
        case "horizontal-down": 
            return(
                <div className="car car-horizontal" key={key}>
                    <div className="car-image horizontal-down-rotation"></div>
                </div>)
    
        case "vertical-left":
            return(
                <div className="car car-vertical" key={key}>
                    <div className="car-image vertical-left-rotation"></div>
                </div>)
    
        case "vertical-right":
            return(
                <div className="car car-vertical" key={key}>
                    <div className="car-image vertical-right-rotation"></div>
                </div>)
        default: 
            console.log("Couldn't find location");
            break;
    }

    
}
export default Car;