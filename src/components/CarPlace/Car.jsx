import './Car.css'
import React from 'react'
import { render } from '@testing-library/react'
function Car({key, location}){
    switch(location){
        case "horizontal-upper": 
            return(
                <div className="car car-horizontal" key={key}>
                    <div className="car-image horizontal-upper-rotation"></div>
                    {console.log(`Creating car in ${location}`)}
                </div>)
        case "horizontal-down": 
            return(
                <div className="car car-horizontal" key={key}>
                    <div className="car-image horizontal-down-rotation"></div>
                    {console.log(`Creating car in ${location}`)}
                </div>)
    
        case "vertical-left":
            return(
                <div className="car car-vertical" key={key}>
                    <div className="car-image vertical-left-rotation"></div>
                    {console.log(`Creating car in ${location}`)}
                </div>)
    
        case "vertical-right":
            return(
                <div className="car car-vertical" key={key}>
                    <div className="car-image vertical-right-rotation"></div>
                    {console.log(`Creating car in ${location}`)}
                </div>)
        default: 
            console.log("Couldn't find location");
            break;
    }

    
}
export default Car;