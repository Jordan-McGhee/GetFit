import React, { useEffect, useState } from "react"

// component imports
import Button from "../../Components/FormElements/Button"
import Card from "../../Components/UIElements/Card"
import MainLiftList from "./Components/MainLiftList"
import WorkoutList from "./Components/WorkoutList"

// hook imports
import { useFetch } from "../../Hooks/useFetch"
import { DUMMY_USER, DUMMY_WORKOUT } from "../../DUMMY/DUMMY_DATA"

const HomePage = (props) => {

    const [ loadedUserLifts, setLoadedUserLifts ] = useState({})
    const [ loadedWorkouts, setLoadedWorkouts ] = useState([])
    

    const { isLoading, hasError, sendRequest, clearError } = useFetch()

    useEffect(() => {
        console.log("Entered useEffect")
        const fetchHomePage = async () => {
            console.log("Entered fetchHomePage")
            try {
                console.log("Entered try block")

                console.log(`1. user: ${loadedUserLifts}`)
                console.log(`1. workouts: ${loadedWorkouts}`)

                const responseData = await sendRequest(`http://localhost:5000`)

                console.log(`responseData ${responseData.user.mainLiftMaxes.benchPress}`)

                setLoadedUserLifts(responseData.user.mainLiftMaxes)
                setLoadedWorkouts(responseData.workouts)

                console.log(`2. user: ${loadedUserLifts}`)
                console.log(`2. workouts: ${loadedWorkouts}`)
            

            } catch (err) {
                console.log(`Error!!! ${err}`)
            }
        }


        fetchHomePage()

    }, [ sendRequest ])

    // useEffect(() => {
    //     const sendRequest = async () => {

    //         try {
    //             const response = await fetch(`http://localhost:5000`)
    //             console.log(`Response: ${response}`)

    //             const responseData = await response.json()

    //             if (!response.ok) {
    //                 console.log("BAD RESPONSE")
    //                 throw new Error(responseData.message)
    //             }

    //             setLoadedUser(responseData.user)
    //             setLoadedWorkouts(responseData.workouts)

    //         } catch(err) {
    //             console.log(err)
    //         }
    //     }

    //     sendRequest()
    // }, [ sendRequest ])


    return (
        <div>

            <Card header = { <h1>Your Workouts</h1> }>
                
                <WorkoutList workouts = { loadedWorkouts } />
            </Card>

            <Card header = { <h1>Your Main Lifts</h1> }>
                
                <MainLiftList lifts = { loadedUserLifts } />
            </Card>

        </div>
    )
}

export default HomePage