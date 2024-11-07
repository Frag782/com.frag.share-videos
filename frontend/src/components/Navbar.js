import { Link } from "react-router-dom"

export const Navbar = () => {
    const routes = [
        {path: '/',text: 'Accueil'},
        {path: '/connexion',text: 'Connexion'},
        {path: '/inscription',text: 'Inscription'}
    ]

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