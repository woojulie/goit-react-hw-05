import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWZmY2JiYzAwZWE0OWIzODFhYzY4MTc1MjRhOTk1NiIsIm5iZiI6MTczMTM1MjQyOC44Njk0Nzc3LCJzdWIiOiI2NzMyNTQzMzZmYzAzMTgyNGIwODZjODYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.q1Fj_99H8MR3u7uOXmQqSeQf6yNJzmvhFPayljsUdOc",
      },
    };

    try {
      const response = await axios.get(url, options);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
