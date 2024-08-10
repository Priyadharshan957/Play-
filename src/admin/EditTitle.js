import React, { useState } from 'react';
import './EditTitle.css';

const EditTitle = () => {
  const [movieDetails, setMovieDetails] = useState({
    movieName: '',
    genre: '',
    duration: { hours: '', minutes: '' },
    language: '',
    isDubbed: false,
    castType: '',
    releaseDate: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieDetails({ ...movieDetails, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setMovieDetails({ ...movieDetails, imageUrl: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    console.log(movieDetails);
    // Save movie details to the server
  };

  return (
    <div className="edit-title">
      <h2>Edit Title</h2>
      <div className="form">
        <input type="text" name="movieName" placeholder="Enter Movie Name" onChange={handleChange} />
        <input type="text" name="genre" placeholder="Genre" onChange={handleChange} />
        <input type="number" name="duration.hours" placeholder="Hour" onChange={handleChange} />
        <input type="number" name="duration.minutes" placeholder="Minute" onChange={handleChange} />
        <input type="text" name="language" placeholder="Language" onChange={handleChange} />
        <div className="radio-group">
          <label>Is Dubbed:</label>
          <input type="radio" name="isDubbed" value="yes" onChange={handleChange} /> Yes
          <input type="radio" name="isDubbed" value="no" onChange={handleChange} /> No
        </div>
        <input type="text" name="castType" placeholder="Enter Cast Type" onChange={handleChange} />
        <input type="date" name="releaseDate" onChange={handleChange} />
        <input type="file" onChange={handleImageUpload} />
        <img src={movieDetails.imageUrl} alt="Preview" className="image-preview" />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default EditTitle;
