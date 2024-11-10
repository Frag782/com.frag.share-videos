import { useNavigate } from "react-router-dom";

const { createContext, useContext, useState, useEffect } = require("react");

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const register = (username, email, password) => {
        fetch('http://localhost:3001/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, email: email, password: password })
        })
            .then( response => response.json())
            .then( data => { console.log(data.message) })
            .catch( error => { console.error(error) });
    }

    const login = (email, password) => {
        fetch('http://localhost:3001/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password })
        })
            .then( response => response.json())
            .then( data => {
                if (data.token) sessionStorage.setItem('token', data.token);
                console.log(data.message);
            })
            .catch( error => { console.error(error) })
    }

    return (
        <AuthContext.Provider value={{ user, register, login }}>
            { children }
        </AuthContext.Provider>
    )
}