import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    <h2>Page not found</h2>
    <Link to="/">Go back to Home</Link>
  </div>
);

export default NotFoundPage;
