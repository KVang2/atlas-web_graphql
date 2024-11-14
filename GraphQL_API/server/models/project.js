// Require mongoose
const mongoose = require('mongoose');

// Create schema that contains mongoose
const Schema = mongoose.Schema;

// Define schema for project model
const projectSchema = new Schema({
    title: { type: String, required: true },
    weight: { type: Number, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model('Project', projectSchema);