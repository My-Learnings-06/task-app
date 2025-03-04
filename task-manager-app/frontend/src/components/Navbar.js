import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { TaskContext } from '../context/TaskContext';

const Navbar = () => {
    const { user, logout } = useContext(TaskContext);

    const handleLogout = () => {
        logout();
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Task Manager</Link>
                </Typography>
                {user ? (
                    <>
                        <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    </>
                ) : (
                    <>
                        <Button color="inherit" component={Link} to="/login">Login</Button>
                        <Button color="inherit" component={Link} to="/signup">Signup</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;