import React, { useEffect, useState } from "react";
import { useParams, Link, Route, Routes } from "react-router-dom";
import axios from "axios";
import MovieCast from "../components/MovieCast";
import MovieReviews from "../components/MovieReviews";
import "../styles/MovieDetailsPage.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWZmY2JiYzAwZWE0OWIzODFhYzY4MTc1MjRhOTk1NiIsIm5iZiI6MTczMTQ0MDIyMy4zNjM4NjYsInN1YiI6IjY3MzI1NDMzNmZjMDMxODI0YjA4NmM4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZH_rGNq1J7ukPhMtAMO5kQvaUBqrPlDYIpCA_O6PuAY",
            },
          }
        );
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details">
      <div className="movie-poster-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} poster`}
          className="movie-poster"
        />
      </div>
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <div className="movie-links">
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </div>
      </div>

      <Routes>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetailsPage;
