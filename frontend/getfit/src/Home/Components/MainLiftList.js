import React from "react"

// import { DUMMY_USER } from "../../../DUMMY/DUMMY_DATA"

import MainLiftItem from "./MainLiftItem"

const MainLiftList = (props) => {
    
    let mainLifts = props.lifts

    let userMainLiftsArray = []

    for (const lift in mainLifts) {
        userMainLiftsArray.push([lift, mainLifts[lift]])
    }

    // console.log(userMainLiftsArray)

    const items = userMainLiftsArray.map((lift) => (
        <MainLiftItem 
            key = { lift[0] }
            exercise = { lift[0] }
            weight = { lift[1] }
        />
    ))

    // console.log(items)

    return (
        <div>
            <ul className="flex overflow-x-auto pb-4 lg:pb-2">
                { items }
            </ul>
        </div>
    )
}

export default MainLiftList