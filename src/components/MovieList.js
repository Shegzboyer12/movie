import React from 'react';
import MovieCard from './movieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {movies.map((movie, index) => (
        <div key={index} className="m-4">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
