import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { signup } from '../services/api';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [nameError, setnameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const history = useHistory();

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let valid = true;
        setnameError('');
        setEmailError('');
        setPasswordError('');
        setError('');

        if (!formData.name) {
            setnameError('Name is required.');
            valid = false;
        }

        if (!formData.email) {
            setEmailError('Email is required.');
            valid = false;
        } else if (!validateEmail(formData.email)) {
            setEmailError('Invalid email format.');
            valid = false;
        }

        if (!formData.password) {
            setPasswordError('Password is required.');
            valid = false;
        }

        if (!valid) return;

        try {
            const response = await signup(formData);
            if (response?.data?.success) {
                history.push('/login');
            }
        } catch (err) {
            console.log(err)
            setError(err?.response?.data?.message);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box mt={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                Signup
                </Typography>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        error={!!nameError}
                        helperText={nameError}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        error={!!emailError}
                        helperText={emailError}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        error={!!passwordError}
                        helperText={passwordError}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Signup
                    </Button>
                </form>
                <p>Already have an account? <a href="/login">Log in</a></p>
            </Box>
        </Container>
    );
};

export default Signup;