// Require mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define schema for task
const taskSchema = new Schema({
    title: { type: String, required: true },
    weight: { type: Number, required: true },
    description: { type: String, required: true },
    projectId: { type: String, required: true }
});

module.exports = mongoose.model('Task', taskSchema);