import React, { useState } from "react"
import { Route, Routes, Navigate } from "react-router-dom"

// DUMMY
import { DUMMY_USER, DUMMY_WORKOUT } from "./DUMMY/DUMMY_DATA";

// COMPONENT IMPORTS
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
      <Route path="/workout/create" element = { <NewWorkout /> } />
      <Route path="/workout/:workoutID/view" element = { <ViewWorkout /> } />
      <Route path="/workout/:workoutID/edit" element = { <EditWorkout /> } />
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