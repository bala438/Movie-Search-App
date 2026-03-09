import React from 'react';

const MovieList = ({ movies, onMovieClick }) => {
  // Conditional rendering: show message if no movies found
  if (!movies || movies.length === 0) {
    return (
      <div className="loading">
        No movies found. Try searching for something else!
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {/* List with key prop for each movie */}
      {movies.map((movie) => (
        <div
          key={movie.id} // Important: unique key for each item in the list
          className="movie-card"
          onClick={() => onMovieClick(movie.id)}
        >
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
          ) : (
            <div className="movie-poster" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              backgroundColor: '#e2e8f0',
              color: '#718096'
            }}>
              No Poster Available
            </div>
          )}
          <div className="movie-info">
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-year">
              {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
            </p>
            <p className="movie-rating">
              ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
