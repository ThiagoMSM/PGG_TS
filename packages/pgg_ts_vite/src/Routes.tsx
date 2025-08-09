import PagLogin from './Pages/Login';
import Home from './Pages/Home'; 
import { BrowserRouter, Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <RouterRoutes>
                <Route path="/" element={<Navigate to="/PagLogin" />} />
                <Route path="/PagLogin" element={<PagLogin />} />
                <Route path="/HomeTeste" element={<Home />} />
            </RouterRoutes>
        </BrowserRouter>
    )
}