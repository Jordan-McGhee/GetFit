import React from "react"
import Card from "../../../Components/UIElements/Card"

const MainLiftItem = (props) => {
    let exerciseName

    if (props.exercise === "benchPress") {
        exerciseName = "Bench Press"
    } else if (props.exercise === "squat") {
        exerciseName = "Squat"
    } else if (props.exercise === "deadlift") {
        exerciseName = "Deadlift"
    } else {
        exerciseName = "Overhead Press"
    }

    return (
        <li>
            <Card header = { exerciseName }>
                <h1>{ props.weight }</h1>
            </Card>
        </li>
    )
}

export default MainLiftItem