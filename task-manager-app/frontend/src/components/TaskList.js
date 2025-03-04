import React, { useContext, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext';
import { List, ListItem, ListItemText, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskList = () => {
    const { tasks, fetchTasks, deleteTask } = useContext(TaskContext);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return (
        <div>
            <h2>Your Tasks</h2>
            <List>
                {tasks.map(task => (
                    <ListItem key={task._id} divider>
                        <ListItemText
                            primary={
                                <Typography
                                    variant="body1"
                                    style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                                >
                                    {task.title}
                                </Typography>
                            }
                            secondary={task.description}
                        />
                        <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(task._id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default TaskList;