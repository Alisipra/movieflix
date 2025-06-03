'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const Page = () => {
  const { slug } = useParams(); // Get slug from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const res = await fetch(`https://itunes.apple.com/lookup?id=${slug}`);
      const data = await res.json();
      setMovie(data.results[0]);
      console.log("mocie",data.results)
    };

    if (slug) fetchMovieDetails();
    
  }, [slug]);

  return (
    <div className="p-4 flex justify-center flex-col">
      {movie ? (
        <>
          <h1 className="font-bold mb-4 text-center text-3xl">{movie.trackName}</h1>
          {/* <img src={movie.artworkUrl100.replace('100x100', '600x600')} alt={movie.trackName} /> */}
          <div className='w-full flex justify-center'>
          <video className='rounded-2xl outline-amber-700 outline-8' src={movie.previewUrl} controls loop/>
          </div>
          <h1 className="font-bold mb-4 mt-12 text-3xl">{movie.trackName}</h1>
          <h1 className="font-bold mb-4  ">{movie.primaryGenreName}</h1>
          <h1 className="font-bold mb-4  "><b>Release date:</b>{movie.releaseDate}</h1>
          <h1 className="font-bold mb-4  "><b>Rating:</b>{movie.contentAdvisoryRating}</h1>
          <p className="mt-2 text-justify"><b>Description:</b>{movie.longDescription || movie.shortDescription || 'No description available.'}</p>
        </>
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
  );
};

export default Page;
