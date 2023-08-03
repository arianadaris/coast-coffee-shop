import React, { createContext, useContext, useState, useEffect } from 'react';

// Create AuthContext
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = async (email, password) => {
        try {
            const credentials = {
                "email": email,
                "pwd": password
            };

            const response = await fetch('https://localhost:7061/Customer/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            });

            if(response.ok) {
                // Login successul, handle response
                const user = await response.json();
                setCurrentUser(user);
                setIsLoggedIn(true);
                return true;
            }
            else {
                console.log('Login failed: Invalid credentials');
            }

            return false;
        }
        catch (error) {
            console.error('Login failed:', error);
            return false;
        }
    };

    const signup = async (firstName, lastName, email, password) => {
        try {
            const credentials = {
                "first_name": firstName,
                "last_name": lastName,
                "email": email,
                "pwd": password
            };

            const response = await fetch('https://localhost:7061/Customer/Signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            });

            if(response.ok) {
                // Signup successful, handle response
                const user = await response.json();
                setCurrentUser(user);
                setIsLoggedIn(true);
                return true;
            }
            else {
                console.log('Signup failed: Invalid credentials');
            }

            return false;
        }
        catch (error) {
            console.error('Signup failed:', error);
            return false;
        }
    };

    const logout = async () => {
        try {
            setCurrentUser(null);
            setIsLoggedIn(false);
            return true;
        }
        catch (error) {
            console.error('Logout failed:', error);
            return false;
        }
    };

    const value = {
        currentUser, 
        login,
        signup,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}