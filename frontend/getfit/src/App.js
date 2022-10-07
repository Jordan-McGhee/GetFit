import React, { Suspense } from "react"
import { Route, Routes, Navigate } from "react-router-dom"

// CONTEXT
import { AuthContext } from "./Context/auth-context";

// AUTH HOOK
import { useAuth } from "./Hooks/useAuth"

// COMPONENT IMPORTS
import './App.css';
import MainNav from "./Nav/MainNav";
// import HomePage from "./Home/HomePage";
// import NewWorkout from "./Pages/Workout/Pages/NewWorkout";
// import ViewWorkout from "./Pages/Workout/Pages/ViewWorkout";
// import EditWorkout from "./Pages/Workout/Pages/EditWorkout"
import AuthPage from "./Pages/AuthPage/AuthPage";
import LoadingSpinner from "./Components/UIElements/LoadingSpinner";
// import WorkoutsPage from "./Pages/Workout/Pages/WorkoutsPage";
// import NotFound from "./Pages/404 Not Found/NotFound";

// LAZY IMPORTS
const HomePage = React.lazy(() => import('./Home/HomePage'))
const NewWorkout = React.lazy(() => import('./Pages/Workout/Pages/NewWorkout'))
const ViewWorkout = React.lazy(() => import('./Pages/Workout/Pages/ViewWorkout'))
const EditWorkout = React.lazy(() => import('./Pages/Workout/Pages/EditWorkout'))
const WorkoutsPage = React.lazy(() => import('./Pages/Workout/Pages/WorkoutsPage'))
const NotFound = React.lazy(() => import('./Pages/404 Not Found/NotFound'))

function App() {

  const { token, userID, login, logout } = useAuth()

  let routes

  if (token) {
    routes = (
      <Routes>
        <Route path="/" element={ <HomePage /> } />
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
        <Route className ='' path="/auth" element = { <AuthPage />} />
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
      <div className="bg-white-2">
        <MainNav />
          <div className="min-h-screen pb-6 px-6">
            <div className="max-w-3xl m-auto">
              <Suspense fallback = {
                <div className="center">
                  <LoadingSpinner />
                </div>
              }>
                { routes }
              </Suspense>
            </div>
            
          </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
