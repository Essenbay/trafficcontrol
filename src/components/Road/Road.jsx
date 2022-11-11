import './Road.css'
import React, { useState } from 'react'

function Road(){
    const [cars, setCars] = useState([]);
    const addCar = (location) => {
        if(location){ //check if they are not empty
            const newCar = {
                id: Math.random().toString(36).substr(2,9),
                location: location
            }
            setCars([...cars, newCar]);
        }
        console.log(`Added car in ${location}`)
    }

    return (
        <div className="road">
            <div className="road-horizontal">
                <div className="road-upper lane-group">
                    <div className="lane-1" onClick={() => {addCar("horizonral-upper-1")}}>Lane 1</div>
                    <div className="lane-2" onClick={() => {addCar("horizonral-upper-2")}}>Lane 2</div>
                </div> 
                <div className="road-down lane-group">
                    <div className="lane-1" onClick={() => {addCar("horizonral-upper-1")}}>Lane 1</div>
                    <div className="lane-2" onClick={() => {addCar("horizonral-upper-2")}}>Lane 2</div>
                </div> 
            </div>

            <div className="road-vertical">
                <div className="road-left lane-group">
                    <div className="lane-1" onClick={() => {addCar("vertical-left-1")}}>Lane 1</div>
                    <div className="lane-2" onClick={() => {addCar("vertical-left-2")}}>Lane 2</div>
                </div> 
                <div className="road-right lane-group">
                    <div className="lane-1" onClick={() => {addCar("vertical-right-1")}}>Lane 1</div>
                    <div className="lane-2" onClick={() => {addCar("vertical-right-2")}}>Lane 2</div>
                </div> 
            </div>
        </div>
    )
}
export default Road;