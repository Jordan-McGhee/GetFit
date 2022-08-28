import React, { useState, useCallback, useEffect } from "react"
import { Route, Routes, Navigate } from "react-router-dom"

// COMPONENT IMPORTS
import './App.css';
import MainNav from "./Nav/MainNav";
import HomePage from "./Home/HomePage";
import NewWorkout from "./Pages/Workout/Pages/NewWorkout";
import ViewWorkout from "./Pages/Workout/Pages/ViewWorkout";
import EditWorkout from "./Pages/Workout/Pages/EditWorkout"
import AuthPage from "./Pages/AuthPage/AuthPage";
import WorkoutsPage from "./Pages/Workout/Pages/WorkoutsPage";
import NotFound from "./Pages/404 Not Found/NotFound";

// CONTEXT
import { AuthContext } from "./Context/auth-context";

// AUTH HOOK
import { useAuth } from "./Hooks/useAuth"

function App() {

  const { token, userID, login, logout } = useAuth()


  let routes

  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/auth" element = { <Navigate to ="/" replace = { true } />} />
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
    <AuthContext.Provider
      value = { {
        // !! = double bang - will update value to true if it's truthy
        isLoggedIn: !!token,
        token: token,
        userID: userID,
        login: login,
        logout: logout
      } }
    >
      <MainNav />
      { routes }
    </AuthContext.Provider>
  );
}

export default App;
