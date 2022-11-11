import './Road.css'
import React, { useState } from 'react'
import Car from '../CarPlace/Car';

function Road(){
    const [cars, setCars] = useState([]);
    const [upperCars, setUpperCars] = useState([]);
    const [downCars, setDownCars] = useState([]);
    const [leftCars, setLeftCars] = useState([]);
    const [rightCars, setRightCars] = useState([]);
    const addCar = (location) => {
        const newCar = {
            id: Math.random().toString(36).substr(2,9),
            location: location
        }
        switch(location){
            case "horizonral-upper": setUpperCars([...upperCars, newCar]); break;
            case "horizonral-down": setDownCars([...downCars, newCar]); break;
            case "vertical-left": setLeftCars([...leftCars, newCar]); break;
            case "vertical-right": setRightCars([...rightCars, newCar]); break;
            default: console.log("Couldn't find location")
        }
        console.log(`Added car in ${location}`)
    }

    return (
        <div className="road">
            <div className="road-horizontal">
                <div className="road-upper lane-group">
                    <div className="lane-1 lane" onClick={() => {addCar("horizonral-upper")}}>
                        <div className="car-item">
                            Car
                        </div>
                        {/* {upperCars.map((car) =>{
                            return (
                                <Car 
                                    key={car.id}
                                    car={car}
                                />
                            )
                        })} */}
                    </div>
                    <div className="lane-2 lane" onClick={() => {addCar("horizonral-upper")}}>Lane 2</div>
                </div> 
                <div className="road-down lane-group">
                    <div className="lane-1 lane" onClick={() => {addCar("horizonral-upper")}}>Lane 1</div>
                    <div className="lane-2 lane" onClick={() => {addCar("horizonral-upper")}}>Lane 2</div>
                </div> 
            </div>

            <div className="road-vertical">
                <div className="road-left lane-group">
                    <div className="lane-1 lane" onClick={() => {addCar("vertical-left")}}>Lane 1</div>
                    <div className="lane-2 lane" onClick={() => {addCar("vertical-left")}}>Lane 2</div>
                </div> 
                <div className="road-right lane-group">
                    <div className="lane-1 lane" onClick={() => {addCar("vertical-right")}}>Lane 1</div>
                    <div className="lane-2 lane" onClick={() => {addCar("vertical-right")}}>Lane 2</div>
                </div> 
            </div>
        </div>
    )
}
export default Road;