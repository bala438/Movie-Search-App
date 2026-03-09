import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieSearch from './components/MovieSearch';
import MovieDetail from './components/MovieDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MovieSearch />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
