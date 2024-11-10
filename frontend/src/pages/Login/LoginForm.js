import { useEffect, useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { user, login } = useAuth();

    useEffect(() => {if (user) navigate('/', { replace: true })}, [user])

    const doLogin = (e) => {
        e.preventDefault();
        login(email, password);
    }

    return (
        <form onSubmit={doLogin}>
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