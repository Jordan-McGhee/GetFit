import React from "react"
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
            <ul>
                { items.slice(0, 3) }
            </ul>
        </div>
    )
}

export default WorkoutsList