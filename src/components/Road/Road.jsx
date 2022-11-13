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
            case "horizontal-upper": 
                if(upperCars.length < 8){
                    setUpperCars([...upperCars, newCar]); 
                } else{console.log(`No place in ${location}`)}
                break;
            case "horizontal-down": 
                if(downCars.length < 8){
                    setDownCars([...downCars, newCar]);
                } else{console.log(`No place in ${location}`)}
                break;
            case "vertical-left": 
                if(leftCars.length < 4){
                    setLeftCars([...leftCars, newCar]);
                } else{console.log(`No place in ${location}`)}
                break;
            case "vertical-right": 
                if(rightCars.length < 4){
                    setRightCars([...rightCars, newCar]); break;
                } else{console.log(`No place in ${location}`)}
                break;
            default: console.log("Couldn't find location")
        }
        console.log(`Added car in ${location}`)
    }

    return (
        <div className="road">
            <div className="road-horizontal">
                <div className="road-upper">
                    <div className="lanes lanes-1">
                        <div className="lane-1 lane" onClick={() => {addCar("horizontal-upper")}}>
                           {upperCars.map((car, index) =>{
                                if(index % 2 == 0){
                                    return (
                                        <Car 
                                            key={car.id}
                                            location={car.location}
                                        />
                                    )
                                }
                            })}
                        </div>
                        <div className="traffic-light">Traffic Light</div>
                        <div className="lane-2 lane" onClick={() => {addCar("horizontal-upper")}}>
                            {upperCars.map((car, index) =>{
                                if(index % 2 != 0){
                                    return (
                                        <Car 
                                            key={car.id}
                                            location={car.location}
                                        />
                                    )
                                }
                            })}
                        </div>
                    </div>
                    
                </div> 
                <div className="road-down">
                    <div className="lanes lanes-2">
                        <div className="lane-3 lane" onClick={() => {addCar("horizontal-down")}}>
                            {downCars.map((car, index) =>{
                                if(index % 2 == 0){
                                    return (
                                        <Car 
                                            key={car.id}
                                            location={car.location}
                                        />
                                    )
                                }
                            })}
                        </div>
                        <div className="lane-4 lane" onClick={() => {addCar("horizontal-down")}}>
                            {downCars.map((car, index) =>{
                                if(index % 2 != 0){
                                    return (
                                        <Car 
                                            key={car.id}
                                            location={car.location}
                                        />
                                    )
                                }
                            })}
                        </div>
                    </div>
                    
                </div> 
                
            </div>

            <div className="road-vertical">
                <div className="road-left">
                    <div className="lane-5 lane" onClick={() => {addCar("vertical-left")}}>
                        {leftCars.map((car, index) =>{
                            if(index % 2 != 0){
                                return (
                                    <Car 
                                            key={car.id}
                                            location={car.location}
                                    />
                                )
                            }
                        })}

                    </div>
                    <div className="lane-6 lane" onClick={() => {addCar("vertical-left")}}>
                        {leftCars.map((car, index) =>{
                            if(index % 2 == 0){
                                return (
                                    <Car 
                                            key={car.id}
                                            location={car.location}
                                    />
                                )
                            }
                        })}
                    </div>
                </div> 
                <div className="road-right">
                    <div className="lane-7 lane" onClick={() => {addCar("vertical-right")}}>
                        {rightCars.map((car, index) =>{
                            if(index % 2 == 0){
                                return (
                                    <Car 
                                            key={car.id}
                                            location={car.location}
                                    />
                                )
                            }
                        })}
                    </div>
                    <div className="lane-8 lane" onClick={() => {addCar("vertical-right")}}>
                        {rightCars.map((car, index) =>{
                            if(index % 2 != 0){
                                return (
                                    <Car 
                                            key={car.id}
                                            location={car.location}
                                    />
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Road;