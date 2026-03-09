import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieList from './MovieList';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // useEffect to fetch popular movies on component mount
  useEffect(() => {
  fetchPopularMovies();
}, []);

  // Mock movie data for testing without API key
  const mockMovies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      poster_path: "/q6y0Go1tsGEsmtFrydoPa3MSWiA.jpg",
      release_date: "1994-09-23",
      vote_average: 8.7,
      overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
      id: 2,
      title: "The Godfather",
      poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      release_date: "1972-03-24",
      vote_average: 8.5,
      overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
      id: 3,
      title: "The Dark Knight",
      poster_path: "/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
      release_date: "2008-07-18",
      vote_average: 8.5,
      overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests."
    },
    {
      id: 4,
      title: "Pulp Fiction",
      poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      release_date: "1994-10-14",
      vote_average: 8.4,
      overview: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption."
    },
    {
      id: 5,
      title: "Forrest Gump",
      poster_path: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
      release_date: "1994-07-06",
      vote_average: 8.2,
      overview: "The presidencies of Kennedy and Johnson, the Vietnam War, and the Watergate scandal unfold from the perspective of an Alabama man."
    },
    {
      id: 6,
      title: "Inception",
      poster_path: "/qmDpIHrmpM5LX0eXgb5yTVvS6Kg.jpg",
      release_date: "2010-07-16",
      vote_average: 8.3,
      overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea."
    }
  ];

  const fetchPopularMovies = async () => {
    setLoading(true);
    setError(null);
    // Simulate API call delay
    setTimeout(() => {
      setMovies(mockMovies);
      setLoading(false);
    }, 800);
  };

  const searchMovies = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      fetchPopularMovies();
      return;
    }

    setLoading(true);
    setError(null);
    // Simulate search delay and filter mock data
    setTimeout(() => {
      const filteredMovies = mockMovies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setMovies(filteredMovies);
      setLoading(false);
    }, 500);
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Movie Search App</h1>
        <p>Search for your favorite movies</p>
      </header>

      <form onSubmit={searchMovies} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {/* Conditional rendering based on state */}
      {loading && <div className="loading">Loading movies...</div>}
      
      {error && <div className="error">{error}</div>}
      
      {!loading && !error && (
        <MovieList movies={movies} onMovieClick={handleMovieClick} />
      )}
    </div>
  );
};

export default MovieSearch;
