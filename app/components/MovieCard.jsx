"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  const pixel = movie.artworkUrl100?.replace('100x100', '300x300');
    const [isHover, setIsHover] = useState(false)
    const router =useRouter();
  return (
    <div className="w-full"
    onMouseEnter={()=>setIsHover(true)}
    onMouseLeave={()=>setIsHover(false)}
    onClick={()=>router.push(`/${movie.trackId}`)}
 
    >
        {isHover&& movie.previewUrl ? (
            <video src={movie.previewUrl} autoPlay loop  className="w-full h-44 sm:h-52 md:h-60 object-cover rounded-md shadow-md"/>
        ):
        <img
        src={pixel}
        alt={movie.trackName}
        className="w-full h-44 sm:h-52 md:h-60 object-cover rounded-md shadow-md"
      />
        }
        

      
      <p className="mt-2 text-xs font-bold sm:text-sm font-2xl text-center truncate ">
        {movie.trackName}
        
      </p>
    </div>
  );
};

export default MovieCard;
