import React from "react"


// component imports
import MainLiftList from "./Components/MainLiftList"
import WorkoutList from "./Components/WorkoutList"

const HomePage = (props) => {
    

    return (
        <div>

            <div>
                <h1>Your Main Lifts</h1>
                <MainLiftList />
            </div>

            <div>
                <h1>Your Workouts</h1>
                <WorkoutList />
            </div>
        </div>
    )
}

export default HomePage