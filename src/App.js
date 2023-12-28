import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import RepoCard from "./Components/RepoCard";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [repos, setRepos] = useState([]);
  const [sortOption, setSortOption] = useState("stars");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/search/repositories?q=${searchTerm}&sort=${sortOption}`
        );
        setRepos(response.data.items);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };

    fetchRepos();
  }, [searchTerm, sortOption]);

  return (
    <div className="app">
      <div className="container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search repositories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search_Input"
          />
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="search_Options"
          >
            <option value="stars">Stars</option>
            <option value="watchers">Watchers</option>
            <option value="score">Score</option>
            <option value="name">Name</option>
            <option value="created">Created At</option>
            <option value="updated">Updated At</option>
          </select>
        </div>
        <div className="repo-list">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
