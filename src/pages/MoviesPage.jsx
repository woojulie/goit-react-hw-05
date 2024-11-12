// src/pages/MoviesPage.jsx
import React, { useState } from "react";
import axios from "axios";
import "../styles/MoviesPage.css";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a movie title.");
      return;
    }
    setError("");
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWZmY2JiYzAwZWE0OWIzODFhYzY4MTc1MjRhOTk1NiIsIm5iZiI6MTczMTQ0MDIyMy4zNjM4NjYsInN1YiI6IjY3MzI1NDMzNmZjMDMxODI0YjA4NmM4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZH_rGNq1J7ukPhMtAMO5kQvaUBqrPlDYIpCA_O6PuAY",
        },
      });
      setMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="movies-page">
      <h1>Search Movies</h1>
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie title..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="movie-results">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
