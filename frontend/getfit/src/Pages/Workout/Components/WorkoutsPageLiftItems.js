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
            <Link to = {`/workout/${props.id}/view`}>
                <Card
                    className = {"nestedCard"} 
                    // header = { header }
                    header = { props.workoutTitle }
                >
                    <p>{`${ props.exercises.length } Exercises`}</p>
                </Card>
            </Link>
        </li>
    )
}

export default WorkoutsPageLiftItems