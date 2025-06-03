import React from 'react';
import MovieCard from './MovieCard';

const MovieRow = ({ movies, title }) => {
  return (
    <div className="mb-10 px-4">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.trackId} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
