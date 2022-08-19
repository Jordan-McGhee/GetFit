import React, { useEffect, useState } from "react"

// component imports
import Card from "../../../Components/UIElements/Card"
import WorkoutsPageLiftList from "../Components/WorkoutsPageLiftList"
import Button from "../../../Components/FormElements/Button"
import LoadingSpinner from "../../../Components/UIElements/LoadingSpinner"
import ErrorModal from "../../../Components/UIElements/ErrorModal"

// hook imports
import { useFetch } from "../../../Hooks/useFetch"

const WorkoutsPage = () => {

    const { isLoading, hasError, sendRequest, clearError } = useFetch()

    const [ loadedWorkouts, setLoadedWorkouts ] = useState([])

    useEffect(() => {

        const fetchWorkoutPage = async () => {

            try {
                const responseData = await sendRequest(`http://localhost:5000/`)

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
            text = "Add Another Workout"
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

                <WorkoutsPageLiftList workouts = { loadedWorkouts }/>

            </Card>
        </React.Fragment>
    )
}

export default WorkoutsPage