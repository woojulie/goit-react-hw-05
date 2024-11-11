import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
      const options = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWZmY2JiYzAwZWE0OWIzODFhYzY4MTc1MjRhOTk1NiIsIm5iZiI6MTczMTM1MjQyOC44Njk0Nzc3LCJzdWIiOiI2NzMyNTQzMzZmYzAzMTgyNGIwODZjODYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.q1Fj_99H8MR3u7uOXmQqSeQf6yNJzmvhFPayljsUdOc",
        },
      };

      try {
        const response = await axios.get(url, options);
        setReviews(response.data.results);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
