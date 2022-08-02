import React from "react"

import { DUMMY_USER } from "../../../DUMMY/DUMMY_DATA"

import MainLiftItem from "./MainLiftItem"

const MainLiftList = (props) => {
    
    let user = DUMMY_USER

    let userMainLifts = user.mainLiftMaxes
    let userMainLiftsArray = []

    for (const lift in userMainLifts) {
        userMainLiftsArray.push([lift, userMainLifts[lift]])
    }

    // console.log(userMainLiftsArray)

    const items = userMainLiftsArray.map((lift) => (
        <MainLiftItem 
            key = { lift[0] }
            exercise = { lift[0] }
            weight = { lift[1] }
        />
    ))

    console.log(items)

    return (
        <div>
            <ul>
                { items }
            </ul>
        </div>
    )
}

export default MainLiftList