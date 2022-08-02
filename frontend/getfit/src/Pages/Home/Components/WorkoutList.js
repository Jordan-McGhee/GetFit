import React from "react"
import { DUMMY_USER } from "../../../DUMMY/DUMMY_DATA"
import WorkoutItem from "./WorkoutItem"

const WorkoutsList = (props) => {
    
    let user = DUMMY_USER

    let workouts = user.workouts

    const items = workouts.map((workout) => (
        <WorkoutItem 
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