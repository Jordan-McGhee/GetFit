import React from "react";
import Button from "../../../Components/FormElements/Button";

import Input from "../../../Components/FormElements/Input";
import Card from "../../../Components/UIElements/Card";
import ExerciseInput from "../Components/ExerciseInput";

const NewWorkout = () => {

    const submitHandler = event => {
        event.preventDefault()


    }

    const newWorkoutFooter = (
        <div>
            <Button
                type = "text"
                text = "Discard"
            />
            <Button 
                type = "submit"
                text = "Create Workout"
            />
        </div>
    )

    let exerciseInputs = [], count = 3
    
    // const addExerciseInput = 

    console.log(exerciseInputs)
    console.log(count)



    return (
        
        <Card header = {"New Workout"} footer = { newWorkoutFooter }>

            <form onSubmit={ submitHandler }>
                <Input
                    id = "workoutTitle"
                    label = "Workout Title"
                    type = "text"
                    placeholder = "Enter a title."
                    errorText = "Please enter a title!"
                />

                <ExerciseInput />
                <ExerciseInput />
                <ExerciseInput />

            </form>

        </Card>
    )
}

export default NewWorkout