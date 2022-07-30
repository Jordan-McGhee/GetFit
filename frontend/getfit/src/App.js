import React, { useState } from "react"
import { Route, Routes, Navigate } from "react-router-dom"


import './App.css';
import MainNav from "./Nav/MainNav";
import HomePage from "./Pages/Home/HomePage";
import NewWorkout from "./Pages/Workout/Pages/NewWorkout";
import ViewWorkout from "./Pages/Workout/Pages/ViewWorkout";
import EditWorkout from "./Pages/Workout/Pages/EditWorkout"

function App() {

  let routes

  routes = (
    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/workout/new" element = { <NewWorkout /> } />
      <Route path="/workout/view/:workoutID" element = { <ViewWorkout /> } />
      <Route path="/workout/edit/:workoutID" element = { <EditWorkout /> } />
      {/* <Route path="*" element={ <Navigate to="/" replace /> } /> */}
    </Routes>
  )


  return (
    <div className="App">
      <MainNav />
      { routes }
    </div>
  );
}

export default App;
