const Task = require('../models/taskModel');

exports.createTask = async (taskData) => {
    const task = new Task(taskData);
    await task.save();
    return task;
};

exports.getTasks = async (userId) => {
    const tasks = await Task.find({ userId });
    return tasks;
};

exports.updateTask = async (id, userId, taskData) => {
    const task = await Task.findByIdAndUpdate({ _id: id, userId}, taskData, { new: true });
    return task;
};

exports.deleteTask = async (id, userId) => {
    const task = await Task.delete({ _id: id, userId });
    return task;
};