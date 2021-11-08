import React, {useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";


const NewMovie = (props) => {
    const [movieName, setMovieName] = useState("");
    const [releaseYear, setReleaseYear] = useState("");
    const [director, setDirector] = useState("");
    const [price, setPrice] = useState("");
    const [showSumary, setShowSumary] = useState (false);

    const movieNameHandler = (event) => {
        setMovieName(event.target.value);
        if(event.target.value !== "") setShowSumary(true);
        else setShowSumary(false);
    };
    const releaseYearHandler = (event) => {
        setReleaseYear(event.target.value);
        if(event.target.value !== "") setShowSumary(true);
        else setShowSumary(false);
    };
    const directorHandler = (event) => {
        setDirector(event.target.value);
        if(event.target.value !== "") setShowSumary(true);
        else setShowSumary(false);
    };
    const priceHandler = (event) => {
        setPrice(event.target.value);
        if(event.target.value !== "") setShowSumary(true);
        else setShowSumary(false);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        props.onNewMovie(movieName, releaseYear, director, price);
        setMovieName("");
        setReleaseYear("");
        setDirector("");
        setPrice("");
    };
    

    return (
        <React.Fragment>
           <Card>
             <form onSubmit={submitHandler}>
                <label>Movie Name</label>
                <input type="text" onChange={movieNameHandler} value={movieName}/>
                <label>Release Year</label>
                <input type="number" onChange={releaseYearHandler} value={releaseYear}/>
                <label>Director</label>
                <input type="text" onChange={directorHandler} value={director}/>
                <label>Price</label>
                <input type="number" onChange={priceHandler} value={price}/>
                <Button type= "submit">Create</Button>
             </form>
            </Card>

            {
                showSumary? (
                <p>
                La pelicula ({movieName}) del director ({director}) estrenada el año ({releaseYear}) cuesta a ({price})
            </p> 
            ) : (
                <></>
            )}
        </React.Fragment>
    );  
};

export default NewMovie;
