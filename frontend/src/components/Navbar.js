import { Link } from "react-router-dom"
import { useAuth } from "../providers/AuthProvider"

export const Navbar = () => {
    const { user } = useAuth();

    const protectedRoutes = [
        {path: '/', text: 'Accueil'},
        {path: '/profile', text: 'Profil'}
    ]

    const anonymousRoutes = [
        {path: '/', text: 'Accueil'},
        {path: '/connexion', text: 'Connexion'},
        {path: '/inscription', text: 'Inscription'}
    ]

    const routes = user ? protectedRoutes : anonymousRoutes;

    return (
        <nav className="nav">
            <ul className="nav-list">
                { routes.map( (route, index) =>
                    <li key={index}>
                        <Link to={route.path}>{route.text}</Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}