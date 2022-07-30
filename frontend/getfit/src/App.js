import React, { useState } from "react"
import { Route, Routes, Navigate } from "react-router-dom"


import './App.css';
import MainNav from "./Nav/MainNav";
import HomePage from "./Pages/Home/HomePage";

function App() {

  let routes

  routes = (
    <Routes>
      <Route path="/" element={ <HomePage /> }/>
      <Route path="workout/:workoutID" element />
      <Route path="workout/:workoutID/edit" element />
      <Route path="*" element={ <Navigate to="/" replace /> } />
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
