import React from 'react';
import { Card, CardActionArea, CardMedia, Typography } from '@mui/material';

const MovieSearch = ({ movies, query = '' }) => {
  // Check if movies is an array
  if (!Array.isArray(movies)) {
    console.error("The 'movies' prop should be an array.");
    return <Typography>Error: Invalid movies data.</Typography>;
  }

  // Ensure query is a string
  const searchQuery = typeof query === 'string' ? query : '';

  const filteredMovies = movies.filter(movie => {
    // Ensure movie and movie.title are defined and are strings
    const title = movie?.title ?? '';
    return title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className='box1'>
      {filteredMovies.length > 0 ? (
        filteredMovies.map(movie => (
          <div key={movie.id} className='lol'>
            <Card sx={{ maxWidth: 300 }} style={{ borderRadius: "25px" }}>
              <CardActionArea style={{ marginLeft: "0px" }}>
                <a href={movie.h}>
                  <CardMedia
                    component="img"
                    height="350"
                    image={movie.img}
                    alt={movie.title}
                  />
                </a>
              </CardActionArea>
            </Card>
          </div>
        ))
      ) : (
        <Typography>No movies found</Typography>
      )}
    </div>
  );
};

export default MovieSearch;
