import './Car.css'
import React from 'react'
import { render } from '@testing-library/react'
function Car({location}){
    switch(location){
        case "horizontal-upper": 
            return(
                <div className="car">
                    <div className="car-horizontal-upper-image"></div>
                    {console.log(`Creating car in ${location}`)}
                </div>)
                break;
        case "horizontal-down": 
        break;
    
        case "vertical-left":
            break;
    
        case "vertical-right":
            break;
    
        default: 
            console.log("Couldn't find location");
            break;
    }

    
}
export default Car;