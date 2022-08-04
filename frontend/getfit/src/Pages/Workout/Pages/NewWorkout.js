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

    let exerciseInputs = [
        <ExerciseInput />,
        <ExerciseInput />,
        <ExerciseInput />
    ]
    
    const addExerciseInput = () => {
        exerciseInputs.push(
            <ExerciseInput />
        )

        console.log("clicked")
    }

    console.log(exerciseInputs)
    // console.log(count)



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

                { exerciseInputs }

                <Button
                    text = "Add Another Exercise"
                    type = "text"
                    onClick = { addExerciseInput }
                />

            </form>

        </Card>
    )
}

export default NewWorkout