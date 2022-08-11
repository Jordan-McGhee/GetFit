import React from "react"
// import { DUMMY_USER } from "../../../DUMMY/DUMMY_DATA"
import WorkoutItem from "./WorkoutItem"

const WorkoutsList = (props) => {

    let workouts = props.workouts

    const items = workouts.map((workout) => (
        <WorkoutItem
            key = { workout.workoutTitle }
            id = { workout._id }
            workoutTitle = { workout.workoutTitle }
            exercises = { workout.exercises }
        />
    ))

    return (
        <div>
            { items }
        </div>
    )
}

export default WorkoutsList