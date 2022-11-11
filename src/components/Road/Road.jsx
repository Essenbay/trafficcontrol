import './Road.css'
import React, { useState } from 'react'
import Car from '../CarPlace/Car';
import CarLeft from '../CarPlace/CarUpper';

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
            case "horizontal-upper": setUpperCars([...upperCars, newCar]); break;
            case "horizontal-down": setDownCars([...downCars, newCar]); break;
            case "vertical-left": setLeftCars([...leftCars, newCar]); break;
            case "vertical-right": setRightCars([...rightCars, newCar]); break;
            default: console.log("Couldn't find location")
        }
        console.log(`Added car in ${location}`)
    }

    return (
        <div className="road">
            <div className="road-horizontal">
                <div className="road-upper">
                    <div className="lane-1 lane" onClick={() => {addCar("horizontal-upper")}}>
                        <Car location={"horizontal-upper"}/>
                        {/* {upperCars.map((car) =>{
                            return (
                                <Car 
                                    key={car.id}
                                    car={car}
                                />
                            )
                        })} */}
                    </div>
                    <div className="lane-2 lane" onClick={() => {addCar("horizontal-upper")}}>Lane 2</div>
                </div> 
                <div className="road-down">
                    <div className="lane-3 lane" onClick={() => {addCar("horizontal-down")}}>Lane 3</div>
                    <div className="lane-4 lane" onClick={() => {addCar("horizontal-down")}}>Lane 4</div>
                </div> 
            </div>

            <div className="road-vertical">
                <div className="road-left">
                    <div className="lane-5 lane" onClick={() => {addCar("vertical-left")}}>Lane 5</div>
                    <div className="lane-6 lane" onClick={() => {addCar("vertical-left")}}>Lane 6</div>
                </div> 
                <div className="road-right">
                    <div className="lane-7 lane" onClick={() => {addCar("vertical-right")}}>Lane 7</div>
                    <div className="lane-8 lane" onClick={() => {addCar("vertical-right")}}>Lane 8</div>
                </div>
            </div>
        </div>
    )
}
export default Road;