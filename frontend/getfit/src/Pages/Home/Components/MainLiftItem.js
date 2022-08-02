import React from "react"
import Card from "../../../Components/UIElements/Card"

const MainLiftItem = (props) => {
    

    return (
        <li>
            <Card header = { props.exercise }>
                <h1>{ props.weight }</h1>
            </Card>
        </li>
    )
}

export default MainLiftItem