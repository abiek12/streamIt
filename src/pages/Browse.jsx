import { useState } from "react";
import Header from "../components/Header";

const Browse = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <div className="Browse">
      <Header authState={isAuthenticated} />
      <h1 className="text-white">Browse Page</h1>
    </div>
  );
};

export default Browse;
