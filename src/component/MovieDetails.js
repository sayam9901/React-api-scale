import React from 'react';

function MovieDetails({ movie }) {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <p>Episode {movie.episode_id}</p>
          <p>Release Date: {movie.releaseDate}</p>
          <p>Director: {movie.director}</p>
          <p>Opening Crawl: {movie.opening_crawl}</p>
        </div>
      ) : (
        <p>Select a movie to see details</p>
      )}
    </div>
  );
}

export default MovieDetails;
