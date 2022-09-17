import React from "react"
import { Link } from "react-router-dom"
import Card from "../../Components/UIElements/Card"

import convertDate from "../../DateConversion/convertDate"

const WorkoutItem = (props) => {

    const date = props.dateCreated

    const convertedDate = convertDate(date)

    const header = (
        <div className="flex items-baseline justify-between truncate max-w-full">
            <p className="truncate">{ props.workoutTitle }</p>
            <p className="text-sm italic font-normal text-black/60">{ convertedDate }</p>
        </div>
    )
    
    return (
        <li>
            <Link to = {`/workout/${props.id}/view`}>
                <Card
                    className = 'my-2 p-6 rounded-lg border border-gray-2 text-xl'
                    header = { header }
                    headerClass = 'font-bold text-3xl border-b mb-4 pb-2'
                >
                    <p>{`${ props.exercises.length } Exercises`}</p>
                </Card>
            </Link>
        </li>
    )
}

export default WorkoutItem