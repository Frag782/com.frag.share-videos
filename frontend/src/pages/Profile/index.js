import { Navbar } from "../../components/Navbar";
import { useAuth } from "../../providers/AuthProvider";

export const Profile = () => {
    const { user } = useAuth();

    return (
        <div>
            <Navbar />
            <h1>{user.username}</h1>
            <p>Ceci est votre espace personnel.</p>
        </div>
    )
}