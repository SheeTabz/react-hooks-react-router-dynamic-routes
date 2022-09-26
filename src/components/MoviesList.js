import React from 'react'
import {Link} from "react-router-dom"

function MoviesList({movies}) {
    console.log(movies)
    const renderMovies = Object.keys(movies).map(movieId =>{
    return (
      <li key={movieId}>
        <Link to={`/movies/${movieId}`}>{movies[movieId].title}</Link>
      </li>
    )
    })

    
  return (
   <ul>{renderMovies}</ul>
  )
}

export default MoviesList