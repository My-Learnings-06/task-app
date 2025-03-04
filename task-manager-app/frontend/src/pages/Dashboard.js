import React, { useContext, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { Container, Typography, Box } from '@mui/material';

const Dashboard = () => {
    const { tasks, fetchTasks } = useContext(TaskContext);

    useEffect(() => {
        fetchTasks();
    }, [tasks]);

    return (
        <Container>
            <Box mt={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Task Manager Dashboard
                </Typography>
                <TaskForm />
                <TaskList tasks={tasks} />
            </Box>
        </Container>
    );
};

export default Dashboard;