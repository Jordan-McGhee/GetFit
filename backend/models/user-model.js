const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: false, default: 0 },
    bodyweight: { type: Number, required: false, default: 0 },
    mainLiftMaxes: {
        benchPress: { type: Number, required: false },
        squat: { type: Number, required: false },
        deadlift: { type: Number, required: false },
        overHeadPress: { type: Number, required: false },
        default: {}
    },

    workouts: [{
        type: mongoose.Types.ObjectId,
        ref: "Workout",
        default: []
    }]
})

module.exports = mongoose.model("User", userSchema)