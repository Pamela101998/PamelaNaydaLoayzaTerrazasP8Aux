import React from "react";
import "./List.css";

const List = (props) => {
    return (
        <div> 
            {props.movie.map ((movie) => {
                return (
                    <div className="blog-preview" key={movie.id}>
                        <h2>{movie.movieName} 🎬 🎥</h2>
                        <p>{movie.releaseYear}</p>
                        <p>{movie.director}</p>
                        <p>{movie.price} Bs. 💰</p>
                    </div>
                );
            })}
        </div>
    );    
};

export default List;
