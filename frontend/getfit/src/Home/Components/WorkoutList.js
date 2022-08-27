import React from "react"
import WorkoutItem from "./WorkoutItem"

const WorkoutList = (props) => {

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
                {/* shows the 3 most recently created workouts */}
                { items.reverse().slice(0,3) }
            </ul>
        </div>
    )
}

export default WorkoutList