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

            <Card header = { <h1>Your Workouts</h1> } footer = { cardFooter } >

                { loadedWorkouts.length > 0 ?
                    <WorkoutsPageLiftList workouts = { loadedWorkouts }/>
                    : 
                    <p>You don't have any workouts yet. Add One?</p>
                }

            </Card>
        </React.Fragment>
    )
}

export default WorkoutsPage