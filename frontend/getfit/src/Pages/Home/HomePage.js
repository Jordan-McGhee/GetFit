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

    const [ loadedUser, setLoadedUser ] = useState()
    const [ loadedWorkouts, setLoadedWorkouts ] = useState([])
    
    let user, workouts

    const { isLoading, hasError, sendRequest, clearError } = useFetch()

    // useEffect(() => {
    //     console.log("Entered useEffect")
    //     const fetchHomePage = async () => {
    //         try {
    //             const responseData = await sendRequest(`http://localhost:5000/`
    //             )

    //             console.log(`responseData ${responseData}`)

    //             user = responseData.user
    //             workouts = responseData.workouts

    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }

    //     fetchHomePage()

    // }, [ sendRequest ])

    useEffect(() => {
        const sendRequest = async () => {

            try {
                const response = await fetch(`http://localhost:5000`)
                console.log(`Response: ${response}`)

                const responseData = await response.json()

                if (!response.ok) {
                    console.log("BAD RESPONSE")
                    throw new Error(responseData.message)
                }

                setLoadedUser(responseData.user)
                setLoadedWorkouts(responseData.workouts)

            } catch(err) {
                console.log(err)
            }
        }

        sendRequest()
    }, [ sendRequest ])

    console.log(`user: ${loadedUser}`)
    console.log(`workouts: ${loadedWorkouts}`)

    return (
        <div>

            <Card header = { <h1>Your Workouts</h1> }>
                
                <WorkoutList workouts = { DUMMY_WORKOUT } />
            </Card>

            <Card header = { <h1>Your Main Lifts</h1> }>
                
                <MainLiftList lifts = { DUMMY_USER } />
            </Card>

        </div>
    )
}

export default HomePage