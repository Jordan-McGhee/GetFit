import React from "react"


// component imports
import Button from "../../Components/FormElements/Button"
import Card from "../../Components/UIElements/Card"
import MainLiftList from "./Components/MainLiftList"
import WorkoutList from "./Components/WorkoutList"

const HomePage = (props) => {
    

    return (
        <div>

            <Card header = { <h1>Your Workouts</h1> }>
                
                <WorkoutList />
            </Card>

            <Card header = { <h1>Your Main Lifts</h1> }>
                
                <MainLiftList />
            </Card>

        </div>
    )
}

export default HomePage