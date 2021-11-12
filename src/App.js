import React, {useState, useContext, Fragment} from "react";
import NewMovie from "./components/Movie/NewMovie";
import NavBar from "./components/navigation/NavBar";
import List from "./components/Movie/List";
import Login from "./components/Login/Login";
import authCtx from "./components/store/auth-context";

function App () {
  const ctx = useContext(authCtx);  
  const [moviesList, setMoviesList] = useState([]);
  const newMovieHandler = (movieName, releaseYear, director, price) => {
    setMoviesList((prevMoviesList) => {
      return [...prevMoviesList, 
        {id: Math.trunc(Math.random()*100), 
          movieName, releaseYear, director, price}];
    });
  };

  return (
    <div className="content">
      <NavBar />
      {ctx.isLoggedIn ? (
        <Fragment>
        <NewMovie onNewMovie = {newMovieHandler} />
        <List movie={moviesList} />
      </Fragment>
      ) : (
        <Login />
      )}
    </div>
  );
}
export default App;


 
