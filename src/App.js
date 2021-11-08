import React, {useState} from "react";
import NewMovie from "./components/Movie/NewMovie";
import NavBar from "./components/navigation/NavBar";
import List from "./components/Movie/List";

function App () {
  const [moviesList, setMoviesList] = useState([]);
  const newMovieHandler = (movieName, releaseYear, director, price) => {
    setMoviesList((prevMoviesList) => {
      return [...prevMoviesList, 
        {id: Math.trunc(Math.random()*6), 
          movieName, releaseYear, director, price}];
    });
  };

  return (
    <div className="content">
      <NavBar />
      <NewMovie onNewMovie = {newMovieHandler} />
      <List movie={moviesList} />
    </div>
  )
}

export default App;