import React from "react"
import { Link } from "react-router-dom"
import Card from "../../../Components/UIElements/Card"

const WorkoutItem = (props) => {

    let header = (
        <Link to = {`/workout/${props.id}/view`}>
            { props.workoutTitle }
        </Link>
    )
    
    return (
        <li>
            <Card className = {"nestedCard"} header = { header }>
                <p>{`${ props.exercises.length } Exercises`}</p>
            </Card>
        </li>
    )
}

export default WorkoutItem