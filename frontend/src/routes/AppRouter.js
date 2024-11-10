import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { AuthProvider } from '../providers/AuthProvider';
import { Anonymous } from './Anonymous';
import { Protected } from './Protected';
import { Profile } from '../pages/Profile';

export const AppRouter = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />} />

                    <Route element={<Anonymous />}>
                        <Route exact path='/connexion' element={<Login />} />
                        <Route exact path='/inscription' element={<Register />} />
                    </Route>

                    <Route element={<Protected />}>
                        <Route path='/profile' element={<Profile />} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    )
}