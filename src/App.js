
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller about dream invasion.',
      posterURL: 'https://linktoimage.com/inception.jpg',
      rating: 8.8,
      trailerLink: 'https://www.youtube.com/embed/YoHD9XEInc0'
    },
    {
      title: 'Titanic',
      description: 'A tragic love story set on the ill-fated Titanic.',
      posterURL: 'https://linktoimage.com/titanic.jpg',
      rating: 7.8,
      trailerLink: 'https://www.youtube.com/embed/kVrqfYjkTdQ'
    },
  ]);

  return (
    <Router>
      <div className="app">
        <h1>Movie App</h1>
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:title" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


