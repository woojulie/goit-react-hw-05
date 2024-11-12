// src/components/MovieCast.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/MovieCast.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWZmY2JiYzAwZWE0OWIzODFhYzY4MTc1MjRhOTk1NiIsIm5iZiI6MTczMTQ0MDIyMy4zNjM4NjYsInN1YiI6IjY3MzI1NDMzNmZjMDMxODI0YjA4NmM4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZH_rGNq1J7ukPhMtAMO5kQvaUBqrPlDYIpCA_O6PuAY",
            },
          }
        );
        setCast(response.data.cast);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div className="cast-container">
      {cast.map((actor) => (
        <div key={actor.cast_id} className="cast-member">
          <img
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt={actor.name}
          />
          <p>{actor.name}</p>
          <p>as {actor.character}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieCast;
