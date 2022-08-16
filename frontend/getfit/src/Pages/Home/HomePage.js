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
        
        const fetchHomePage = async () => {
            
            try {

                const responseData = await sendRequest(`http://localhost:5000`)

                setLoadedUserLifts(responseData.user.mainLiftMaxes)
                setLoadedWorkouts(responseData.workouts)

            } catch (err) {
                console.log(`Error!!! ${err}`)
            }
        }


        fetchHomePage()

    }, [ sendRequest ])

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