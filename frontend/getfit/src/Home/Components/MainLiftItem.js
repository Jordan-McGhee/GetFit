import React from "react"
import Card from "../../Components/UIElements/Card"

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
            <Card
            // className = {"nestedCard"}
            className = 'mx-2 p-6 rounded-lg border border-gray-2 overflow-x-auto scroll-pt-8 w-52 text-xl'
            headerClass = 'font-bold text-xl border-b mb-4 pb-2'
            header = { exerciseName }>
                <h1>{ props.weight } lbs</h1>
            </Card>
        </li>
    )
}

export default MainLiftItem