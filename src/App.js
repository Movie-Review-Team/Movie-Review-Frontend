import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieListPage from './pages/MovieListPage';
import AddMoviePage from './pages/AddMoviePage';
import EditMoviePage from './pages/EditMoviePage';
import MovieDetailPage from './pages/MovieDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/movies/add" element={<AddMoviePage />} />
        <Route path="/movies/edit/:id" element={<EditMoviePage />} />
        <Route path="/movies/:id" element={<MovieDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;