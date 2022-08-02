import React from "react"
import Card from "../../../Components/UIElements/Card"

const WorkoutItem = (props) => {
    

    return (
        <li>
            <Card header = { props.workoutTitle }>
                <p>{`${ props.exercises.length } Exercises`}</p>
            </Card>
        </li>
    )
}

export default WorkoutItem