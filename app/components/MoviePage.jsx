import React from 'react'
import MovieRow from './MovieRow'

const MoviePage = ({movies}) => {
  return (
    <>
    <div>
        <main>
            {movies.map((movie)=>{
                return(
                    <MovieRow
                     key={Math.random()}
                    title={movie.title}
                       movies={movie.movies?.results || []}
                    /> 
                )
            })}
        </main>
    </div>
    </>
  )
}

export default MoviePage