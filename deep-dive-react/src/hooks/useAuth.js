import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const authenticate = async (email, password, isSignUp = false) => {
    setLoading(true);
    setError(null);

    const endpoint = isSignUp ? '/api/auth/register' : '/api/auth/login';

    try {
      const response = await fetch(`${import.meta.env.VITE_URL}${endpoint}`, {
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

        const defaultName = email.split('@')[0];
        localStorage.setItem('userName', defaultName);

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

  return { authenticate, logout, loading, error };
};
