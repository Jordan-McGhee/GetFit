Backend
    - Models:
        <!-- ~ update user model to have body weight and lifts be an array? So we can potentially add charts to show change over time --DONE -->
        ~ add a routine model to hold multiple workouts?

    <!-- - Controllers: --DONE -->
        — user-controller:
            <!-- ~ route to add mainlifts to newly created user --DONE -->
        - auth-controller:
            <!-- ~ add placeholder functions to create user & login --DONE -->
        - workout-controller:
            <!-- ~ createWorkout: remove placeholder code to find user --DONE -->
            <!-- ~ add ID to exercises --DONE -->
            <!-- ~ updateWorkout: add code block to validate logged in user is the workoutCreator --DONE -->
            <!-- ~ deleting workouts not removing from attached user --DONE -->
        - homepage-controllers
            <!-- ~ update code for logged in user --DONE -->

Frontend
    - add a modal --DONE
    <!-- - conditional formatting for new account ("There's nothing here!") --DONE -->
    <!-- - Add all pages and routes to app.js --DONE -->
    <!-- - Router not directing to NewWorkout.js Fix this!!!! --DONE -->
        <!-- ~ issue is with input component --DONE -->
    <!-- - add LoadingSpinner --DONE -->
    - Update routes with .env variable
    - prevent auth form submission if invalid
    <!-- - add an all workouts page to align with Navbar --DONE -->
    <!-- - 404 Not Found Page --DONE -->
    <!-- - modals for confirming delete/discard --DONE -->
    - refreshing navigates back to home page. FIX

    - Input
        <!-- ~ Move validation to individual components that use the input? --DONE -->

    - CARD
        <!-- ~ Add a footer for buttons --DONE -->

    - MODAL LIST:
        ~ discard changes/delete workout
        <!-- ~ when user wants to change their lifts --DONE -->
        <!-- ~ alter MainLiftModal to update appropriately and useEffect maybe on HomePage to re-render when necessary? --DONE -->

    - AuthPage.js
        <!-- ~ add button to change between login/signup --DONE -->

    - NewWorkout.js
        <!-- ~ redirect to view workout page after creating workout --DONE -->
        ~ change form to not allow submission if there are any errors
        ~ change add another exercise button to disabled if previous inputs have errors
        ~ add remove exercise button conditionally if there are at least 3 exercises
        <!-- ~ add form submission and work on passing values to backend/database --DONE -->

    - EditWorkout.js
        ~ fix form to be able to change values and save changes
            - maybe have the state update in the component that is using Input/ExerciseInput?
        ~ add ability to add/remove more inputs in the edit

    - ViewWorkout.js
        ~ update code to include loading spinner and errors --DONE

    - ExerciseInput.js
        ~ figure out how to keep track of how many exercise inputs there are and use that to save exercises to database --DONE
        ~ figure out button to add another exercise input to form --DONE

    - HomePage.js
        ~ fix fetch hook to communicate to backend --DONE
        ~ Make WorkoutList only show the most recent 3 - View More button navigates to Workouts-Page component --DONE
        ~ modal pop-up to update user's main lifts list --DONE
        ~ add dropdown for exercises to show each one 
        ~ maybe refactor closeMainLiftModalHandler to refresh the page differently? --DONE
        ~ modal make age a date instead of number entry

    - ALL FORMS
        ~ change number entry format
        ~ Make sure all fetch requests have the token added --DONE

    - WorkoutsPage
        ~ Add sorting based on frequency, recency and something else maybe idk
        ~ Figure out what to add to differentiate the workout list here and the home page

    - DeleteWorkout
        ~ Figure out how to close Modal and have Error Modal if there is one
        ~ change to ConfirmDelete/Discard? Use it for discarding a workout form? --DONE
        ~ Make sure error modal pops up if there is an issue --DONE