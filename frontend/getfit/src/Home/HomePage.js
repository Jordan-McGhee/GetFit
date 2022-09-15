import React, { useContext, useEffect, useState } from "react"

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
import { AuthContext } from "../Context/auth-context"

const HomePage = (props) => {

    const auth = useContext(AuthContext)

    const [ loadedUser, setLoadedUser ] = useState(null)
    const [ loadedUserLifts, setLoadedUserLifts ] = useState({})
    const [ loadedWorkouts, setLoadedWorkouts ] = useState([])
    const [ showMainLiftModal, setShowMainLiftModal ] = useState(false)
    

    const { isLoading, hasError, sendRequest, clearError } = useFetch()

    // FETCH REQUEST
    useEffect(() => {
        
        const fetchHomePage = async () => {
            
            try {

                const responseData = await sendRequest(
                    // URL
                    `http://localhost:5000`,
                    // METHOD
                    'GET',
                    // HEADERS
                    {
                        Authorization: 'Bearer ' + auth.token
                    }
                )

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
    }

    const updateMainLiftsHandler = (data) => {
        setLoadedUserLifts(data)
        setShowMainLiftModal(false)
    }

    // FOOTER BUTTONS FOR LISTS ON HOME PAGE
    const workoutFooter = (
        <Button
            type = "button"
            text = { loadedWorkouts.length > 0 ? "View All Workouts" : "Create a Workout"}
            link = {loadedWorkouts.length > 0 ? `/workout/all` : `/workout/create`}
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
                    mainLifts = { loadedUserLifts }
                    show = { showMainLiftModal }
                    onCancel = { closeMainLiftModalHandler }
                    onUpdate = { updateMainLiftsHandler }
                />
            }

            <Card header = { <h1>Your Main Lifts</h1> } footer = { mainLiftsFooter }
            // className = "homepage-main-lifts-list"
            >
                
                <MainLiftList lifts = { loadedUserLifts } />
            </Card>

            <Card header = { <h1>Latest Workouts</h1> } footer = { workoutFooter } 
            // className = "homepage-workouts-list"
            >

                { loadedWorkouts.length > 0 ? <WorkoutList workouts = { loadedWorkouts } /> : <p>You don't have any workouts yet. Add one?</p>}
                
            </Card>

        </div>
    )
}

export default HomePage