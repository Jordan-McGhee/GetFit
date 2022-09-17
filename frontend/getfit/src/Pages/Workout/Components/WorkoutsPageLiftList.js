import React, { useEffect, useState } from "react"

// component imports
import Card from "../../../Components/UIElements/Card"
import WorkoutsPageLiftItems from "./WorkoutsPageLiftItems"


// hook imports

const WorkoutsPageLiftList = (props) => {

    let workouts = props.workouts

    const items = workouts.map((workout) => (
        <WorkoutsPageLiftItems
            key = { workout.workoutTitle }
            id = { workout._id }
            workoutTitle = { workout.workoutTitle }
            exercises = { workout.exercises }
            dateCreated = { workout.created_at }
            // add other stuff later
        />
    ))

    return (
        <ul>
            { items }
        </ul>
    )
}

export default WorkoutsPageLiftList