import './App.css';
import Road from './components/Road/Road';
import React, { useState } from 'react'

function App() {
    const [upperCars, setUpperCars] = useState([]);
    const [downCars, setDownCars] = useState([]);
    const [leftCars, setLeftCars] = useState([]);
    const [rightCars, setRightCars] = useState([]);
    const [trafficState, setTrafficState] = useState(false);
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
    <div className="App">
      <header className="App-header">
        <button className='start' onClick={() => {setTrafficState(true)}}>START</button>
        <Road addCar={addCar} upperCars={upperCars} downCars={downCars} leftCars={leftCars} rightCars={rightCars} trafficState={trafficState}/>
      </header>
    </div>
  );
}

export default App;
