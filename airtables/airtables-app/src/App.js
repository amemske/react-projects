import React, { useState, useEffect } from 'react';
import './App.css';
import MovieCard from './MovieCard';

const url =
  'https://api.airtable.com/v0/appNGStkgkCOb1uFu/favourites?api_key=keyZXRWBeXaOwQYCS';

function App() {
  const [movieData, setMovieData] = useState([]);

  const FetchMovies = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovieData(data.records);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    FetchMovies();
  }, []);

  return (
    <div className='container mt-5'>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
        {movieData.map((movie) => (
          <MovieCard {...movie.fields} />
        ))}
      </div>
    </div>
  );
}

export default App;
