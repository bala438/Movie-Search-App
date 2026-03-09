# Movie Search App

A simple React movie search application that demonstrates functional components, hooks, and routing.

## Features Implemented

### React Concepts Used:
- **Functional Components**: All components are written as functional components
- **useState**: State management for search terms, movies, loading states, and errors
- **useEffect**: Fetching data on component mount and when dependencies change
- **Conditional Rendering**: Shows different UI based on loading, error, and data states
- **List & Keys**: Rendering movie lists with proper key props for performance
- **Forms**: Search form with controlled inputs and submission handling
- **Router**: React Router for navigation between search and detail pages

### App Features:
- Search for movies using TMDb API
- View popular movies on initial load
- Click on any movie to see detailed information
- Responsive design with modern styling
- Error handling and loading states

## Getting Started

### Prerequisites:
1. Get a free API key from [The Movie Database (TMDb)](https://www.themoviedb.org/settings/api)
2. Replace `YOUR_API_KEY` in the following files with your actual API key:
   - `src/components/MovieSearch.js` (line 18 and 32)
   - `src/components/MovieDetail.js` (line 18)

### Installation:
```bash
npm install
```

### Running the App:
```bash
npm start
```

The app will open in your default browser at `http://localhost:3000`.

## Project Structure

```
movie-search-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MovieSearch.js    # Main search component with form and useEffect
│   │   ├── MovieList.js      # List rendering with conditional logic and keys
│   │   └── MovieDetail.js    # Detail view with useEffect for data fetching
│   ├── App.js                # Main app with router setup
│   ├── App.css
│   ├── index.js              # Entry point
│   └── index.css             # Global styles
├── package.json
└── README.md
```

## Components Overview

### MovieSearch.js
- Uses useState for managing search term, movies, loading, and error states
- Uses useEffect to fetch popular movies on component mount
- Implements form handling with controlled inputs
- Conditional rendering for loading, error, and success states

### MovieList.js
- Demonstrates list rendering with proper key props
- Conditional rendering when no movies are found
- Handles click events for navigation

### MovieDetail.js
- Uses useParams to get movie ID from URL
- Uses useEffect to fetch movie details
- Extensive conditional rendering for different data states
- Navigation back to search page

### App.js
- Sets up React Router with routes for home and movie details
- Simple routing configuration

## API Usage

This app uses The Movie Database (TMDb) API:
- Popular movies endpoint: `/movie/popular`
- Search endpoint: `/search/movie`
- Movie details endpoint: `/movie/{id}`

## Styling

The app uses modern CSS with:
- Flexbox and Grid layouts
- Responsive design
- Smooth transitions and hover effects
- Clean, modern UI with gradients and shadows
