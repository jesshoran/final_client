import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import Workouts from './components/Workouts.js'
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import Generator from "./components/Generator";
import WorkoutShow from './components/WorkoutShow.js';
import AddWorkout from './components/AddWorkout.js';

function App () {

    return (
      <div className="App">
        <NavBar/>

          <Switch>
          <Route
              path="/add"
              render={() => {
                return (
                  <AddWorkout/>
                );
              }}
            />
          <Route
              path="/workouts/:id"
              render={() => {
                return (
                  <WorkoutShow/>
                );
              }}
            />
           <Route
              path="/workouts"
              render={() => {
                return (
                  <Workouts/>
                );
              }}
            />
            <Route
              path="/generator"
              render={() => {
                return (
                  <Generator/>
                );
              }}
            />
            <Route
            path="/"
            render={() => {
              return (
                <Homepage/>
             );
           }}
         />       
          </Switch>
    </div>
  );
}

export default App;