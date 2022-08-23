import React, { useState, useCallback } from "react"
import { Route, Routes, Navigate } from "react-router-dom"

// COMPONENT IMPORTS
import './App.css';
import MainNav from "./Nav/MainNav";
import HomePage from "./Pages/Home/HomePage";
import NewWorkout from "./Pages/Workout/Pages/NewWorkout";
import ViewWorkout from "./Pages/Workout/Pages/ViewWorkout";
import EditWorkout from "./Pages/Workout/Pages/EditWorkout"
import AuthPage from "./Pages/Auth/AuthPage";
import WorkoutsPage from "./Pages/Workout/Pages/WorkoutsPage";
import NotFound from "./Pages/404 Not Found/NotFound";

// CONTEXT
import { AuthContext } from "./Context/auth-context";

function App() {

    // manage whether we are logged in or not app-wide with useState
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)

    // useCallback so these functions are only called once
    const login = useCallback(() => {
      setIsLoggedIn(true)
    }, [])
    
    const logout = useCallback(() => {
      setIsLoggedIn(false)
    }, [])

  let routes

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/auth" element = { <AuthPage />} />
        <Route path="/workout/all" element = { <WorkoutsPage /> } />
        <Route path="/workout/create" element = { <NewWorkout /> } />
        <Route path="/workout/:workoutID/view" element = { <ViewWorkout /> } />
        <Route path="/workout/:workoutID/edit" element = { <EditWorkout /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    )
  } else {
    routes = (
      <Routes>
        <Route path="/auth" element = { <AuthPage />} />
        <Route path="*" element = {<Navigate to="/auth" replace = { true } />} />
      </Routes>
    )
  }



  return (
    <AuthContext.Provider value = { { isLoggedIn, login, logout} }>
      <MainNav />
      { routes }
    </AuthContext.Provider>
  );
}

export default App;
