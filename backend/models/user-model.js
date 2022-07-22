const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    bodyweight: { type: Number, required: true },
    mainLiftMaxes: {
        benchPress: { type: Number, required: false },
        squat: { type: Number, required: false },
        deadlift: { type: Number, required: false },
        overHeadPress: { type: Number, required: false },
    },

    workouts: [{
        type: mongoose.Types.ObjectId,
        ref: "Workout",
        default: []
    }]
})

module.exports = mongoose.model("User", userSchema)