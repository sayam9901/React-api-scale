import React from 'react';

function MovieList({ movies, onMovieClick }) {
  return (
    <div>
      <ul style={{listStyle:"none",padding:"0px"}}>
        {movies.map((movie) => (
          <li style={{display:"flex",justifyContent:"space-between" ,padding:"10px",marginBottom:"5px",cursor:"pointer",borderBottom:"1px solid gray"}} key={movie.episode_id} onClick={() => onMovieClick(movie)}>
            <span>Episode {movie.episode_id}</span>
            <span>{movie.title}</span>
            <span>{movie.created.split("T")[0]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
