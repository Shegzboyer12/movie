import React, { useState } from 'react';
import MovieList from './components/movieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 4.5,
    },
    {
      title: 'Interstellar',
      description: 'A journey through space and time.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 4.8,
    },
  ]);
  const [filterText, setFilterText] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const handleAddMovie = () => {
    const newMovie = {
      title: prompt('Enter movie title:'),
      description: prompt('Enter movie description:'),
      posterURL: prompt('Enter movie poster URL:'),
      rating: parseFloat(prompt('Enter movie rating:')),
    };
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterText.toLowerCase()) &&
      (filterRating === '' || movie.rating >= parseFloat(filterRating))
    );
  });

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-4">Movie List</h1>
      <button
        onClick={handleAddMovie}
        className="block mx-auto mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
      >
        Add Movie
      </button>
      <Filter
        filterText={filterText}
        filterRating={filterRating}
        onFilterTextChange={setFilterText}
        onFilterRatingChange={setFilterRating}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
