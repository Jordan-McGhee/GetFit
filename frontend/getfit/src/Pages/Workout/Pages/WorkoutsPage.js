import React, { useContext, useEffect, useState } from "react"

// component imports
import Card from "../../../Components/UIElements/Card"
import WorkoutsPageLiftList from "../Components/WorkoutsPageLiftList"
import Button from "../../../Components/FormElements/Button"
import LoadingSpinner from "../../../Components/UIElements/LoadingSpinner"
import ErrorModal from "../../../Components/UIElements/ErrorModal"

// hook imports
import { useFetch } from "../../../Hooks/useFetch"
import { AuthContext } from "../../../Context/auth-context"

const WorkoutsPage = () => {

    const auth = useContext(AuthContext)

    const { isLoading, hasError, sendRequest, clearError } = useFetch()

    const [ loadedWorkouts, setLoadedWorkouts ] = useState([])

    useEffect(() => {

        const fetchWorkoutPage = async () => {

            try {
                const responseData = await sendRequest(
                    // URL
                    `http://localhost:5000/`,
                    // METHOD
                    `GET`,
                    // HEADERS
                    {
                        Authorization: 'Bearer ' + auth.token
                    }
                )

                setLoadedWorkouts(responseData.workouts)

            } catch(err) {
                console.log(err)
            }


        }

        fetchWorkoutPage()

    }, [ sendRequest ])

    // const [ sortNewFirst, setSortNewFirst ] = useState(false)

    const cardHeader = (
        <div>

            <h1>Your Workouts</h1>
            {/* <Button
                type = "button"
                text = { sortNewFirst ? "Show Oldest First" : "Show Newest First"}
                onClick = { () => setSortNewFirst(!sortNewFirst)}
            /> */}

        </div> 
    )

    const cardFooter = (
        <Button
            type = "button"
            text = { loadedWorkouts.length > 0 ? "Add Another Workout" : "Add a Workout"}
            link = {`/workout/create`}
        />
    )

    return(
        <React.Fragment>

            <ErrorModal error = { hasError } onClear = { clearError } />

            { isLoading &&
                <div>
                    <LoadingSpinner asOverlay />
                </div>
            }

            <Card header = { cardHeader } footer = { cardFooter } >

                { loadedWorkouts.length > 0 ?
                    // <WorkoutsPageLiftList workouts = { sortNewFirst ? loadedWorkouts.reverse() : loadedWorkouts }/>
                    <WorkoutsPageLiftList workouts = { loadedWorkouts.reverse() }/>
                    : 
                    <p>You don't have any workouts yet. Add One?</p>
                }

            </Card>
        </React.Fragment>
    )
}

export default WorkoutsPage