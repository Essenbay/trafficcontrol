import './Road.css'
import React, { useState } from 'react'
import Car from '../CarPlace/Car';
import TrafficLight from '../TrafficLight/TrafficLight';

function Road({addCar, upperCars, downCars, leftCars, rightCars, trafficState}){
    let upperTl, downTl, leftTl, rightTl;
    const setTrafficColor = () =>{
        console.log("Traffic state: " + trafficState);
        if(trafficState == false){
            return 'black';
        }
        else if(trafficState == true){
            if(upperCars.length + downCars.length > leftCars.length + rightCars.length ){
                upperTl = 'green';
                downTl = 'green';
                leftTl = 'red';
                rightTl = 'red';
                console.log("Green on upper and down traffic lights!")
            }
            else{
                upperTl = 'red';
                downTl = 'red';
                leftTl = 'green';
                rightTl = 'green';
                console.log("Green on left and right traffic lights!")
            }
        }
    }
    setTrafficColor();
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
                        <TrafficLight location={"horizontal-upper"} color={upperTl}/>
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
                        <TrafficLight location={"horizontal-down"} color={downTl}/>
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
                    <div className="lanes lanes-3">
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
                        <TrafficLight location={"vertical-left"} color={leftTl}/>
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
                    
                </div> 
                <div className="road-right">
                    <div className="lanes lanes-4">
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
                        <TrafficLight location={"vertical-right"} color={rightTl}/>
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
        </div>
    )
}
export default Road;