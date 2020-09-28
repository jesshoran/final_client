import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import axios from 'axios';
import Workouts from './components/Workouts.js'
import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";

function App () {



    return (
      <div className="App">
        <NavBar/>

          <Switch>
           <Route
              path="/workouts"
              render={() => {
                return (
                  <Workouts/>
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