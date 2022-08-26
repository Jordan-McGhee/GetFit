import React, { useEffect, useState } from "react"

// component imports
import Button from "../Components/FormElements/Button"
import Card from "../Components/UIElements/Card"
import MainLiftList from "./Components/MainLiftList"
import WorkoutList from "./Components/WorkoutList"
import LoadingSpinner from "../Components/UIElements/LoadingSpinner"
import ErrorModal from "../Components/UIElements/ErrorModal"

// hook imports
import { useFetch } from "../Hooks/useFetch"
import UpdateMainLiftModal from "./Components/MainLiftForm/UpdateMainLiftModal"

const HomePage = (props) => {

    const [ loadedUser, setLoadedUser ] = useState(null)
    const [ loadedUserLifts, setLoadedUserLifts ] = useState({})
    const [ loadedWorkouts, setLoadedWorkouts ] = useState([])
    const [ showMainLiftModal, setShowMainLiftModal ] = useState(false)
    

    const { isLoading, hasError, sendRequest, clearError } = useFetch()

    // FETCH REQUEST
    useEffect(() => {
        
        const fetchHomePage = async () => {
            
            try {

                const responseData = await sendRequest(`http://localhost:5000`)

                setLoadedUser(responseData.user)
                setLoadedUserLifts(responseData.user.mainLiftMaxes)
                setLoadedWorkouts(responseData.workouts)

            } catch (err) {
                console.log(`Error!!! ${err}`)
            }
        }


        fetchHomePage()

    }, [ sendRequest ])


    // MODAL CODE FOR UPDATE MAIN LIFTS
    const showMainLiftModalHandler = () => {
        setShowMainLiftModal(true)
    }

    const closeMainLiftModalHandler = () => {
        setShowMainLiftModal(false)

        // this function is runs every time the modal is opened, whether they update the lifts or not
        // used to refresh the page after the user u
        window.location.reload(false);
    }

    // FOOTER BUTTONS FOR LISTS ON HOME PAGE
    const workoutFooter = (
        <Button
            type = "button"
            text = "View More"
            link = {`/workout/all`}
        />
    )

    const mainLiftsFooter = (
        <Button
            type = "button"
            text = "Update Lifts"
            onClick = { showMainLiftModalHandler }
        />
    )

    return (
        <div className = "homepage-container">

            <ErrorModal error = { hasError } onClear = { clearError } />

            { isLoading &&
                <div>
                    <LoadingSpinner asOverlay />
                </div>
            }

            {
                showMainLiftModal &&
                <UpdateMainLiftModal
                    user = { loadedUser }
                    show = { showMainLiftModal }
                    onCancel = { closeMainLiftModalHandler }
                />
            }

            <Card header = { <h1>Latest Workouts</h1> } footer = { workoutFooter } className = "homepage-workouts-list">
                
                <WorkoutList workouts = { loadedWorkouts } />
            </Card>

            <Card header = { <h1>Your Main Lifts</h1> } footer = { mainLiftsFooter } className = "homepage-main-lifts-list">
                
                <MainLiftList lifts = { loadedUserLifts } />
            </Card>

        </div>
    )
}

export default HomePage