// pages/HomePage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const url = "https://api.themoviedb.org/3/trending/movie/day";
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
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
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

export default HomePage;
