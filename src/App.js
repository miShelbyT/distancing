import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import Submitted from './components/Submitted'

function App() {

  let point1 = {
    lat: 41.8781,
    lng: 87.6298,
  };

  let point2 = {
    lat: 40.0583,
    lng: 74.4057,
  };

  const distanceBetweenPoints = require("distance-between-geocoordinates");

  let result = distanceBetweenPoints(point1, point2, "mile");

  return (
    <div className="App">
      {/* <h1>Hello from React</h1>
      <h2>The distance between the points is {result.distance} {result.unit}</h2>
      <h2>The distance between the points is {result.distance}</h2> */}
      <div className="header">
        <img src="/UberCapitalGroup.jpeg" alt=""/>
      </div>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route path="/submitted" component={Submitted} />
      </Switch>

    </div>
  );
}

export default App;
