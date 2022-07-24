const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: false, default: 0 },
    bodyWeight: { type: Number, required: false, default: 0 },
    mainLiftMaxes: {
        benchPress: { type: Number, required: false, default: 0 },
        squat: { type: Number, required: false, default: 0 },
        deadlift: { type: Number, required: false, default: 0 },
        overHeadPress: { type: Number, required: false, default: 0 },
    },

    workouts: [{
        type: mongoose.Types.ObjectId,
        ref: "Workout",
        default: []
    }]
})

module.exports = mongoose.model("User", userSchema)