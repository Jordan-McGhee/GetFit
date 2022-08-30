import React from "react";

import Card from "../../Components/UIElements/Card";
import WorkoutList from "./WorkoutList";
import MainLiftList from "./MainLiftList";

const CheckForNewUser = props => {
    
    let content

    if (props.user.workouts >= 1) {
        content = (
            <div>
                <Card header = { <h1>Latest Workouts</h1> } footer = { workoutFooter } className = "homepage-workouts-list">
                    {/* <p>hi { loadedUser.email }</p> */}
                    <WorkoutList workouts = { loadedWorkouts } />
                </Card>

                <Card header = { <h1>Your Main Lifts</h1> } footer = { mainLiftsFooter } className = "homepage-main-lifts-list">
                    
                    <MainLiftList lifts = { loadedUserLifts } />
                </Card>
            </div>
        )
    }

    return (
        { content }
    )
}

export default CheckForNewUser