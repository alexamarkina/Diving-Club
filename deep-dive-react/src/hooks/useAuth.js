import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const login = async(email, password) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('https://6ae64b83877d34ccafc2c349.mockapi.io/tickets');
            if (!response.ok) throw new Error('Server error');

            if (email && password) {
                localStorage.setItem('token', 'fake-jwt-token-12345');
                navigate('/cabinet');
            } else {
                throw new Error('Please, enter your email and password');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return { login, logout, loading, error };
};