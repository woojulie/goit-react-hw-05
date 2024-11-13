import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/MoviesPage.css";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query) {
      setError("Please enter a search query");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie`,
        {
          params: {
            api_key: "61ffcbbc00ea49b381ac6817524a9956",
            query,
          },
        }
      );
      setMovies(response.data.results);
      setError("");
    } catch (error) {
      setError("Failed to fetch movies");
    }
  };

  return (
    <div className="movies-page">
      <h2>Search Movies</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter movie name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="movies-list">
        {movies.map((movie) => (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            className="movie-item"
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
