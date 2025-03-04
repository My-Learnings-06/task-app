import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('/tasks');
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        } finally {
            setLoading(false);
        }
    };

    const createTask = async (task) => {
        try {
            const response = await axios.post('/tasks', task);
            setTasks((prevTasks) => [...prevTasks, response.data]);
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    const updateTask = async (id, updatedTask) => {
        try {
            const response = await axios.put(`/tasks/${id}`, updatedTask);
            setTasks((prevTasks) =>
                prevTasks.map((task) => (task._id === id ? response.data : task))
            );
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`/tasks/${id}`);
            setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const markTaskAsCompleted = async (id) => {
        try {
            const response = await axios.put(`/tasks/${id}`, { completed: true });
            setTasks((prevTasks) =>
                prevTasks.map((task) => (task._id === id ? response.data : task))
            );
        } catch (error) {
            console.error('Error marking task as completed:', error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <TaskContext.Provider
            value={{
                tasks,
                loading,
                createTask,
                updateTask,
                deleteTask,
                markTaskAsCompleted,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};

export { TaskContext, TaskProvider };