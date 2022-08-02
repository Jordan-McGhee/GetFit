const mongoose = require("mongoose")

const workoutSchema = new mongoose.Schema({
    workoutTitle: { type: String, required: true },
    workoutCreator: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
    exercises: [{
        exerciseName: { type: String, required: true },
        sets: { type: Number, required: true },
        reps: { type: Number, required: true },
        weightUsed: []
    }]
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
)

module.exports = mongoose.model("Workout", workoutSchema)