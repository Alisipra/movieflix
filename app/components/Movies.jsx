import React from 'react'
import MoviePage from './MoviePage';


const fetchMovies=async(query)=>{
    const data=await fetch(`https://itunes.apple.com/search?term=${query}&media=movie`)
    const res=data.json()
    return res;
}
const Movies = async() => {
    const marvel=await fetchMovies("marvel");
    const dc=await fetchMovies("dc");
    const commedy=await fetchMovies("commedy");
    const drama=await fetchMovies("drama");
    const movies=[
        {title:"Action Trillers", movies:marvel},
        {title:"Dc", movies:dc},
        {title:"Commedy", movies:commedy},
        {title:"Drama", movies:drama},

    ]
  
  return (
    <div>
     <MoviePage movies={movies}/> 
    </div>
  )
}

export default Movies