import { useState } from "react";

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (e) => {
        e.preventDefault();

        fetch('http://localhost:3001/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password })
        })
            .then( response => response.json())
            .then( data => { console.log(data.message) })
            .catch( error => { console.error(error) })
    }

    return (
        <form onSubmit={login}>
            <div>
                <label>Adresse courriel</label>
                <input type="email" required onChange={(e) => setEmail(e.target.value)}></input>
            </div>

            <div>
                <label>Mot de passe</label>
                <input type="password" required onChange={(e) => setPassword(e.target.value)}></input>
            </div>

            <button type="submit">Se connecter</button>
        </form>
    )
}