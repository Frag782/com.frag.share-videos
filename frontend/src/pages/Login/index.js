import { Navbar } from "../../components/Navbar"
import { LoginForm } from "./LoginForm"

export const Login = () => {
    return (
        <div>
            <Navbar />
            <h1>Connexion</h1>
            <LoginForm />
        </div>
    )
}