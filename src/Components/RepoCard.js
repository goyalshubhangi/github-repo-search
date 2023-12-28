// RepoCard.js
import React from 'react';

const RepoCard = ({ repo }) => {
  return (
    <div className="repo-card">
      <img src={repo.owner.avatar_url} alt="Avatar" />
      <div className="repo-info">
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
        <p>
          <strong>Stars:</strong> {repo.stargazers_count}
        </p>
        <p>
          <strong>Language:</strong> {repo.language}
        </p>
      </div>
    </div>
  );
};

export default RepoCard;
