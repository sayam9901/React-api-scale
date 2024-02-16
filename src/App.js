import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./component/MovieList";
import MovieDetails from "./component/MovieDetails";
import SearchBar from "./component/SearchBar";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [ sortBy , setSortBy] = useState("date")
  const [searchTerm , setSearchTerm] = useState("")

  const handleSortChange = (e)=>{
    setSortBy(e.target.value)
  }

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleSearch = (searchTerm) =>{
    console.log(searchTerm)
    setSearchTerm(searchTerm);
  }

  useEffect(()=>{
    const filterMovie = movies.filter((movie)=>movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
    setMovies(filterMovie)

  },[searchTerm])

  useEffect(() => {
    fetch("https://swapi.dev/api/films/?format=json")
      .then((response) => response.json())
      .then((json) => setMovies(json.results));
  }, []);
  useEffect(()=>{
      if(sortBy==="date"){
        const filterMovie = [...movies].sort((a,b)=>a.created.localeCompare(b.created))
        setMovies(filterMovie)
      }else if(sortBy==="episode"){
        const filterMovie = [...movies].sort((a,b)=>a.episode_id - b.episode_id)
        setMovies(filterMovie)
      }
  },[sortBy])

  return (
    <div>
      <div style={{display:"flex" , marginTop:"25px"}}>
       <div style={{ marginBottom: "10px" }}>
        Sort By:{" "}
        <select value={sortBy} onChange={handleSortChange}>
          <option value="date">Date</option>
          <option value="episode">Episode</option>
        </select>
      </div>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch}/>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, border:"1px solid gray",height:"100vw" }}>
          <MovieList movies={movies} onMovieClick={handleMovieClick} />
        </div>
        <div style={{ flex: 1 , border:"1px solid gray",height:"100vw" }}>
          {" "}
          <MovieDetails movie={selectedMovie} />
        </div>
      </div>
    </div>
  );
}

export default App;
