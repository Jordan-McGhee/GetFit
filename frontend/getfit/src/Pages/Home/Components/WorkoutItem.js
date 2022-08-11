import React from "react"
import { Link } from "react-router-dom"
import Card from "../../../Components/UIElements/Card"

const WorkoutItem = (props) => {
    
    return (
        <li>
            <Link to = {`/workout/${props.id}/view`}>
                <Card header = { props.workoutTitle }>
                    <p>{`${ props.exercises.length } Exercises`}</p>
                </Card>
            </Link>
        </li>
    )
}

export default WorkoutItem