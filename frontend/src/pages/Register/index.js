import { Navbar } from "../../components/Navbar"
import { RegisterForm } from "./RegisterForm";

export const Register = () => {
    return (
        <div>
            <Navbar />
            <h1>Inscription</h1>
            <RegisterForm />
        </div>
    )
}