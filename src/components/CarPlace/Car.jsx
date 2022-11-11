import './Car.css'
import React from 'react'
import carImage from '../../images/car.png'

function Car({car}){
    const carStyle = {

    }
        
    const getRotation = ()=> {
        switch(car.location){
            case "horizonral-upper": break;
            case "horizonral-down": break;
            case "vertical-left": break;
            case "vertical-right": break;
            default: console.log("Couldn't find location")
        }
    }
    return(
        <div className="car">
           {/* <img src={carImage} alt="Car"/> */}
        </div>
    )
}
export default Car;