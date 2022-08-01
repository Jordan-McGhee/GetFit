Backend
    - Controllers:
        — user-controller:
            ~ route to add mainlifts to newly created user --DONE
        - auth-controller:
            ~ add placeholder functions to create user & login --DONE
        - workout-controller:
            ~ createWorkout: remove placeholder code to find user
            ~ add ID to exercises --DONE
            ~ updateWorkout: add code block to validate logged in user is the workoutCreator
        - homepage-controllers
            ~ update code for logged in user

Frontend
    - MODAL LIST:
        ~ discard changes/delete workout
        ~ when user wants to change their lifts
    - add a modal --DONE
    - conditional formatting for new account ("There's nothing here!")
    - Add all pages and routes to app.js
    - Router not directing to NewWorkout.js Fix this!!!! --DONE
        ~ issue is with input component --DONE

    - NewWorkout.js
        ~ redirect to view workout page after creating workout
        ~ change form to not allow submission if there are any errors

    - ExerciseInput.js
        ~ figure out how to keep track of how many exercise inputs there are and use that to save exercises to database
        ~ figure out button to add another exercise input to form

    - EditWorkout.js
        ~ fix form to be able to change values and save changes
            - maybe have the state update in the component that is using Input/ExerciseInput?