import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// component imports
import Card from "../../../Components/UIElements/Card"

const WorkoutsPageLiftItems = (props) => {
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

export default WorkoutsPageLiftItems