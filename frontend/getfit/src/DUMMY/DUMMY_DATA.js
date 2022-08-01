const DUMMY_USER = {
    firstName : "Jordan",
    lastName : "McGhee",
    email: "test@test.com",
    age: 27,
    bodyWeight: 180,
    mainLiftMaxes: {
        benchPress: 225,
        squat: 275,
        deadlift: 375,
        overHeadPress: 115
    },
    workouts: [

    ]
}

const DUMMY_WORKOUT = {
    id: "test",
    workoutTitle: "Example Workout",
    workoutCreator: DUMMY_USER,
    exercises: [
        {   
            id: "exercise1",
            exerciseName: "Exercise 1",
            sets: 3,
            reps: 8,
            weightUsed: [75]
        },
        {
            id: "exercise2",
            exerciseName: "Exercise 2",
            sets: 4,
            reps: 12,
            weightUsed: [85]
        },
        {
            id: "exercise3",
            exerciseName: "Exercise 3",
            sets: 5,
            reps: 15,
            weightUsed: [100]
        }
    ]
}

export { DUMMY_USER, DUMMY_WORKOUT}