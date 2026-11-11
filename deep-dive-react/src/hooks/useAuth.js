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
            const response = await fetch('http://localhost:5001/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Authorisation failed');
            }

            const data = await response.json();
            if (data.token) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userEmail', email);

                if (!localStorage.getItem('userName')) {
                    const defaultName = email.split('@')[0];
                    localStorage.setItem('userName', defaultName);
                }

                navigate('/cabinet');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userEmail');
        navigate('/login');
    };

    return { login, logout, loading, error };
};