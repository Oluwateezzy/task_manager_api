const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must provide Name"],
        trim: true,
        maxlength: [20, "not more than 20"],
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("task", TaskSchema);