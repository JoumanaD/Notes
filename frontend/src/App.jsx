import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import Register from "./pages/Register.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";


function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
        path="/"
        element={
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
