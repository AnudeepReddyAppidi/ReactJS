const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/taskify', { useNewUrlParser: true, useUnifiedTopology: true });

// User model
const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String
});

// Task model
const Task = mongoose.model('Task', {
    title: String,
    description: String,
    dueDate: Date,
    assignedTo: mongoose.Schema.Types.ObjectId
});

// Routes
app.post('/register', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send(user);
});

app.post('/task', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.send(task);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
