import React from "react";

const ViewWorkout = props => {

    let exercises

    exercises = props.workout.exercises
    console.log(exercises)

    return (
        <div>
            <h1>
                { props.workout.workoutTitle}
            </h1>

            <ul>

                {/* ITERATE OVER EXERCISES TO DISPLAY THEM */}
                { exercises.map(exercise => (
                    <li>
                        <h4>
                            { exercise.exerciseName }
                        </h4>

                        <div>
                            <p>{ exercise.sets } Sets</p>
                            <p>{ exercise.reps } Reps</p>
                            <p>{ exercise.weightUsed } Last Weight</p>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default ViewWorkout