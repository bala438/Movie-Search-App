import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  // useEffect to fetch movie details when component mounts or id changes
  useEffect(() => {
  fetchMovieDetails();
}, [fetchMovieDetails]);

  // Mock movie details for testing without API key
  const mockMovieDetails = {
    1: {
      id: 1,
      title: "The Shawshank Redemption",
      poster_path: "/q6y0Go1tsGEsmtFrydoPa3MSWiA.jpg",
      release_date: "1994-09-23",
      vote_average: 8.7,
      vote_count: 25000,
      runtime: 142,
      tagline: "Fear can hold you prisoner. Hope can set you free.",
      overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      genres: [
        { id: 18, name: "Drama" },
        { id: 80, name: "Crime" }
      ],
      production_companies: [
        { id: 97, name: "Castle Rock Entertainment" }
      ]
    },
    2: {
      id: 2,
      title: "The Godfather",
      poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      release_date: "1972-03-24",
      vote_average: 8.5,
      vote_count: 18000,
      runtime: 175,
      tagline: "An offer you can't refuse.",
      overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      genres: [
        { id: 18, name: "Drama" },
        { id: 80, name: "Crime" }
      ],
      production_companies: [
        { id: 4, name: "Paramount Pictures" }
      ]
    },
    3: {
      id: 3,
      title: "The Dark Knight",
      poster_path: "/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
      release_date: "2008-07-18",
      vote_average: 8.5,
      vote_count: 28000,
      runtime: 152,
      tagline: "Why so serious?",
      overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
      genres: [
        { id: 28, name: "Action" },
        { id: 18, name: "Drama" },
        { id: 80, name: "Crime" }
      ],
      production_companies: [
        { id: 429, name: "DC Comics" },
        { id: 174, name: "Warner Bros. Pictures" }
      ]
    },
    4: {
      id: 4,
      title: "Pulp Fiction",
      poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      release_date: "1994-10-14",
      vote_average: 8.4,
      vote_count: 22000,
      runtime: 154,
      tagline: "You won't know the facts until you've seen the fiction.",
      overview: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
      genres: [
        { id: 18, name: "Drama" },
        { id: 53, name: "Thriller" },
        { id: 80, name: "Crime" }
      ],
      production_companies: [
        { id: 7, name: "Miramax Films" }
      ]
    },
    5: {
      id: 5,
      title: "Forrest Gump",
      poster_path: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
      release_date: "1994-07-06",
      vote_average: 8.2,
      vote_count: 20000,
      runtime: 142,
      tagline: "The world will never be the same once you've seen it through the eyes of Forrest Gump.",
      overview: "The presidencies of Kennedy and Johnson, the Vietnam War, and the Watergate scandal unfold from the perspective of an Alabama man.",
      genres: [
        { id: 18, name: "Drama" },
        { id: 10749, name: "Romance" }
      ],
      production_companies: [
        { id: 4, name: "Paramount Pictures" }
      ]
    },
    6: {
      id: 6,
      title: "Inception",
      poster_path: "/qmDpIHrmpM5LX0eXgb5yTVvS6Kg.jpg",
      release_date: "2010-07-16",
      vote_average: 8.3,
      vote_count: 30000,
      runtime: 148,
      tagline: "Your mind is the scene of the crime.",
      overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
      genres: [
        { id: 28, name: "Action" },
        { id: 878, name: "Science Fiction" },
        { id: 53, name: "Thriller" }
      ],
      production_companies: [
        { id: 923, name: "Legendary Entertainment" },
        { id: 429, name: "DC Comics" },
        { id: 174, name: "Warner Bros. Pictures" }
      ]
    }
  };

  const fetchMovieDetails = async () => {
    setLoading(true);
    setError(null);
    // Simulate API call delay
    setTimeout(() => {
      const movie = mockMovieDetails[id];
      if (movie) {
        setMovie(movie);
      } else {
        setError('Movie not found');
      }
      setLoading(false);
    }, 600);
  };

  // Conditional rendering based on loading and error states
  if (loading) {
    return (
      <div className="container">
        <div className="loading">Loading movie details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error">{error}</div>
        <button onClick={() => navigate('/')} className="back-button">
          Back to Search
        </button>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="container">
        <div className="error">Movie not found</div>
        <button onClick={() => navigate('/')} className="back-button">
          Back to Search
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <button onClick={() => navigate('/')} className="back-button">
        ← Back to Search
      </button>
      
      <div className="movie-detail">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-detail-poster"
          />
        ) : (
          <div className="movie-detail-poster" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#e2e8f0',
            color: '#718096',
            height: '450px'
          }}>
            No Poster Available
          </div>
        )}
        
        <div className="movie-detail-content">
          <h1>{movie.title}</h1>
          
          {/* Conditional rendering for tagline */}
          {movie.tagline && (
            <p style={{ fontStyle: 'italic', color: '#666', marginBottom: '20px' }}>
              "{movie.tagline}"
            </p>
          )}
          
          <div style={{ marginBottom: '20px' }}>
            <strong>Release Date:</strong> {movie.release_date || 'N/A'}
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <strong>Rating:</strong> ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'} 
            ({movie.vote_count || 0} votes)
          </div>
          
          {/* Conditional rendering for genres */}
          {movie.genres && movie.genres.length > 0 && (
            <div style={{ marginBottom: '20px' }}>
              <strong>Genres:</strong>{' '}
              {movie.genres.map((genre) => genre.name).join(', ')}
            </div>
          )}
          
          {/* Conditional rendering for runtime */}
          {movie.runtime && (
            <div style={{ marginBottom: '20px' }}>
              <strong>Runtime:</strong> {movie.runtime} minutes
            </div>
          )}
          
          <div style={{ marginBottom: '20px' }}>
            <strong>Overview:</strong>
            <p style={{ marginTop: '10px', lineHeight: '1.6' }}>
              {movie.overview || 'No overview available.'}
            </p>
          </div>
          
          {/* Conditional rendering for production companies */}
          {movie.production_companies && movie.production_companies.length > 0 && (
            <div style={{ marginBottom: '20px' }}>
              <strong>Production Companies:</strong>
              <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
                {movie.production_companies.map((company) => (
                  <li key={company.id}>{company.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
