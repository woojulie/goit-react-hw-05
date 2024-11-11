import React, { useEffect, useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import axios from "axios";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}`;
      const options = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWZmY2JiYzAwZWE0OWIzODFhYzY4MTc1MjRhOTk1NiIsIm5iZiI6MTczMTM1MjQyOC44Njk0Nzc3LCJzdWIiOiI2NzMyNTQzMzZmYzAzMTgyNGIwODZjODYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.q1Fj_99H8MR3u7uOXmQqSeQf6yNJzmvhFPayljsUdOc",
        },
      };

      try {
        const response = await axios.get(url, options);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
