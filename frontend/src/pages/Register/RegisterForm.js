import { useState } from "react";

export const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = (e) => {
        e.preventDefault();

        fetch('http://localhost:3001/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, email: email, password: password })
        })
            .then( response => response.json())
            .then( data => { console.log(data.message) })
            .catch( error => { console.error(error) })
    }

    return (
        <form onSubmit={register}>
            <div>
                <label>Nom d'utilisateur</label>
                <input type="text" required onChange={(e) => setUsername(e.target.value)}></input>
            </div>

            <div>
                <label>Adresse courriel</label>
                <input type="email" required onChange={(e) => setEmail(e.target.value)}></input>
            </div>

            <div>
                <label>Mot de passe</label>
                <input type="password" required onChange={(e) => setPassword(e.target.value)}></input>
            </div>

            <button type="submit">Envoyer</button>
        </form>
    )
}