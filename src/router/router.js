import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MovieList from '../pages/MovieList';
import Favorites from '../pages/Favorites';
import MovieDetails from '../pages/MovieDetails';
import { LanguageProvider } from '../context/language';
import RegisterForm from '../auth/signup'

function AppRouter() {
  return (
    <Router>
       <LanguageProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/register" element={<RegisterForm/>} />
        <Route path="/signup" element={<RegisterForm/>} />
      </Routes>
      </LanguageProvider>
    </Router>
  );
}

export default AppRouter;