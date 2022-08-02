import React from "react"


// component imports
import Card from "../../Components/UIElements/Card"
import MainLiftList from "./Components/MainLiftList"
import WorkoutList from "./Components/WorkoutList"

const HomePage = (props) => {
    

    return (
        <Card>

            <Card header = { <h1>Your Workouts</h1> }>
                
                <WorkoutList />
            </Card>

            <Card header = { <h1>Your Main Lifts</h1> }>
                
                <MainLiftList />
            </Card>

        </Card>
    )
}

export default HomePage