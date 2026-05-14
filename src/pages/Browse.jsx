import { useState } from "react";
import Header from "../components/Header";

const Browse = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <div className="Browse">
      <Header authState={isAuthenticated} />
    </div>
  );
};

export default Browse;
