import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/connexion' element={<Login />} />
                <Route exact path='/inscription' element={<Register />} />
            </Routes>
        </Router>
    )
}