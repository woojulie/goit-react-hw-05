// components/MovieCast.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
      const options = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWZmY2JiYzAwZWE0OWIzODFhYzY4MTc1MjRhOTk1NiIsIm5iZiI6MTczMTM1MjQyOC44Njk0Nzc3LCJzdWIiOiI2NzMyNTQzMzZmYzAzMTgyNGIwODZjODYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.q1Fj_99H8MR3u7uOXmQqSeQf6yNJzmvhFPayljsUdOc",
        },
      };

      try {
        const response = await axios.get(url, options);
        setCast(response.data.cast);
      } catch (error) {
        console.error("Error fetching movie cast:", error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h3>Cast</h3>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            {actor.name} as {actor.character}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
