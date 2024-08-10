// src/MovieDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetail.css';

import img1 from '../Images/mp1.jpg'
import img2 from '../Images/mp2.jpeg'
import img3 from '../Images/mp3.jpeg'
import img4 from '../Images/mp4.jpg'
import img5 from '../Images/mp5.jpg'

import img6 from '../Images/rec3.jpg';
import img7 from '../Images/rec4.jpg';
import img8 from '../Images/mp1.jpg';
import img9 from '../Images/a4.jpg';
import img10 from '../Images/mp3.jpeg'

import img11 from '../Images/act5.jpg'
import img12 from '../Images/act4.jpg'
import img13 from '../Images/act2.jpg'
import img14 from '../Images/act3.jpg'
import img15 from '../Images/act1.jpg'

import img20 from '../Images/sc1.jpg'
import img18 from '../Images/sc.jpg'
import img19 from '../Images/sc3.jpg'
import img17 from '../Images/sc2.jpg'
import img16 from '../Images/sc4.jpg'

import img21 from '../Images/d1.jpg'
import img22 from '../Images/d2.jpeg'
import img23 from '../Images/d3.jpeg'
import img24 from '../Images/d4.jpeg'
import img25 from '../Images/d5.jpeg'

import img26 from '../Images/a1.jpg'
import img27 from '../Images/a2.jpg'
import img28 from '../Images/a3.jpg'
import img29 from '../Images/a4.jpg'
import img30 from '../Images/a5.jpg'

import img31 from '../Images/vr1.jpg'
import img32 from '../Images/vr2.jpg'
import img33 from '../Images/vr3.jpg'
import img34 from '../Images/vr4.jpg'
import img35 from '../Images/vr5.jpg'

const movies = [
  {
    id: 1,
    title: "The Goat Life",
    image: img1,
    description: "A documentary on the life and habits of goats.",
    quality: "1080p",
    genre: "Documentary",
    year: "2021",
    duration: "1h30m",
    videoUrls: {
      "4K": "https://ffmovies.lol/movies/?imdb=tt3606752/",
      "1080p": "https://www.youtube.com/watch?v=w-Vyh-99r9o",
      "720p": "https://www.youtube.com/watch?v=gGIvOWGbUj0&t=89s"
    }
  },
  {
    id: 2,
    title: "Spiderman Across the Spider-Verse",
    image: img2,
    description: "Miles Morales embarks on a new adventure through the multiverse.",
    quality: "4K",
    genre: "Superhero",
    year: "2023",
    duration: "2h10m",
    videoUrls: {
      "4K": "https://www.youtube.com/watch?v=Q3w4MynLSaM",
      "1080p": "https://www.youtube.com/watch?v=5qls34NYAOI",
      "720p": "https://www.youtube.com/watch?v=1h9_gp0xuKU"
    }
  },
  {
    id: 3,
    title: "Laapataa Ladies",
    image: img3,
    description: "A story of two women on a journey of self-discovery.",
    quality: "4K",
    genre: "Drama",
    year: "2024",
    duration: "2h15m",
    videoUrls: {
      "4K": "https://www.youtube.com/watch?v=7Ek8EdztE2s",
      "1080p": "https://www.youtube.com/watch?v=5qls34NYAOI",
      "720p": "https://www.youtube.com/watch?v=1h9_gp0xuKU"
    }
  },
  {
    id: 4,
    title: "Avesham",
    image: img4,
    description: "A thrilling tale of revenge and redemption.",
    quality: "720p",
    genre: "Thriller",
    year: "2023",
    duration: "2h10m",
    videoUrls: {
      "4K": "https://drive.google.com/file/d/1BDYVnGhrJhwZUNhqbFOOQMIdIXES-4YX/view?usp=sharing",
      "1080p": "https://www.youtube.com/watch?v=5qls34NYAOI",
      "720p": "https://www.youtube.com/watch?v=1h9_gp0xuKU"
    }
  },
  {
    id: 5,
    title: "The Garfield Movie",
    image: img5,
    description: "The beloved lasagna-loving cat is back.",
    quality: "4K",
    genre: "Comedy",
    year: "2004",
    duration: "1h20m",
    videoUrls: {
      "4K": "https://www.youtube.com/watch?v=UhkWZlP2pxM",
      "1080p": "https://www.youtube.com/watch?v=5qls34NYAOI",
      "720p": "https://www.youtube.com/watch?v=1h9_gp0xuKU"
    }
  },
  {
    id: 6,
    title: "The Garfield Movie",
    image: img6,
    description: "The beloved lasagna-loving cat is back.",
    quality: "4K",
    genre: "Comedy",
    year: "2004",
    duration: "1h20m",
    videoUrls: {
      "4K": "https://www.youtube.com/watch?v=UhkWZlP2pxM",
      "1080p": "https://www.youtube.com/watch?v=5qls34NYAOI",
      "720p": "https://www.youtube.com/watch?v=1h9_gp0xuKU"
    }
  },
  {
    id: 7,
    title: "Garudan",
    image: img7,
    description: "A mystery thriller revolving around a police investigation.",
    quality: "720p",
    genre: "Thriller",
    year: "2024",
    duration: "2h30m",
    videoUrls: {
      "4K": "https://www.youtube.com/watch?v=2c54u_T7MxY",
      "1080p": "https://www.youtube.com/watch?v=5qls34NYAOI",
      "720p": "https://www.youtube.com/watch?v=1h9_gp0xuKU"
    }
  },
  {
    id: 8,
    title: "The Goat Life",
    image: img8,
    description: "A documentary on the life and habits of goats.",
    quality: "1080p",
    genre: "Documentary",
    year: "2021",
    duration: "1h30m",
    videoUrls: {
      "4K": "https://www.youtube.com/watch?v=5qls34NYAOI&t=449s",
      "1080p": "https://www.youtube.com/watch?v=w-Vyh-99r9o",
      "720p": "https://www.youtube.com/watch?v=gGIvOWGbUj0&t=89s"
    }
  },
  {
    id: 9,
    title: "Inside Out 2",
    image: img9,
    description: "The emotions face new challenges as a new emotion, Anxiety, joins the team.",
    quality: "1080p",
    genre: "Animated",
    year: "2024",
    duration: "1h45m",
    videoUrls: {
      "4K": "https://www.youtube.com/watch?v=zkdF9l2I7r4",
      "1080p": "https://www.youtube.com/watch?v=5qls34NYAOI",
      "720p": "https://www.youtube.com/watch?v=1h9_gp0xuKU"
    }
  },
  {
    id: 10,
    title: "Laapataa Ladies",
    image: img10,
    description: "A story of two women on a journey of self-discovery.",
    quality: "4K",
    genre: "Drama",
    year: "2024",
    duration: "2h15m",
    videoUrls: {
      "4K": "https://www.youtube.com/watch?v=7Ek8EdztE2s",
      "1080p": "https://www.youtube.com/watch?v=5qls34NYAOI",
      "720p": "https://www.youtube.com/watch?v=1h9_gp0xuKU"
    }
  },
  {
    id: 11,
    title: "Maharaja",
    image: img11,
    description: "A historical drama about a royal family.",
    quality: "1080p",
    genre: "Drama",
    year: "2024",
    duration: "2h30m",
    videoUrls: {
      "4K": "https://www.youtube.com/watch?v=dL0U-qlrhA8",
      "1080p": "https://www.youtube.com/watch?v=5qls34NYAOI",
      "720p": "https://www.youtube.com/watch?v=1h9_gp0xuKU"
    }
  },
  {
    id: 12,
    title: "2012",
    image: img12,
    description: "A disaster film about the end of the world.",
    quality: "4K",
    genre: "Action",
    year: "2009",
    duration: "2h38m",
    videoUrls: {
      "4K": "https://www.youtube.com/watch?v=8lY5j-0xlKo",
      "1080p": "https://www.youtube.com/watch?v=5qls34NYAOI",
      "720p": "https://www.youtube.com/watch?v=1h9_gp0xuKU"
    }
  },
  {
    id: 13,
    title: "Garudan",
    image: img13,
    description: "A mystery thriller revolving around a police investigation.",
    quality: "720p",
    genre: "Thriller",
    year: "2024",
    duration: "2h30m",
    videoUrls: {
      "4K": "https://www.youtube.com/watch?v=2c54u_T7MxY",
      "1080p": "https://www.youtube.com/watch?v=5qls34NYAOI",
      "720p": "https://www.youtube.com/watch?v=1h9_gp0xuKU"
    }
  },
  {
    id: 14,
    title: "Godzilla x Kong",
    image: img14,
    description: "Two legendary monsters clash in an epic battle.",
    quality: "4K",
    genre: "Action",
    year: "2021",
    duration: "1h53m",
    videoUrls: {
      "4K": "https://www.youtube.com/watch?v=cfT_r-QBFMo",
      "1080p": "https://www.youtube.com/watch?v=5qls34NYAOI",
      "720p": "https://www.youtube.com/watch?v=1h9_gp0xuKU"
    }
  },
  {
    id: 15,
    title: "Captain Miller",
    image: img15,
    description: "A biographical war drama about a courageous captain.",
    quality: "1080p",
    genre: "War",
    year: "2024",
    duration: "2h50m",
    videoUrls: {
      "4K": "https://www.youtube.com/watch?v=JvSz4cMJbFw",
      "1080p": "https://www.youtube.com/watch?v=5qls34NYAOI",
      "720p": "https://www.youtube.com/watch?v=1h9_gp0xuKU"
    }
  },
  {
    id: 16,
    title: "Maanaadu",
    image: img16,
    description: "A time-loop thriller where a man relives the same day.",
    quality: "720p",
    genre: "Thriller",
    year: "2021",
    duration: "2h27m",
    videoUrls: {
      "4K": "https://www.youtube.com/watch?v=zFCOMq4H7tI",
      "1080p": "https://www.youtube.com/watch?v=5qls34NYAOI",
      "720p": "https://www.youtube.com/watch?v=1h9_gp0xuKU"
    }
  },
  {
    id: 17,
    title: "Kalki AD 2099",
    image: img17,
    description: "A futuristic tale of a hero in a dystopian world.",
    quality: "4K",
    genre: "Science Fiction",
    year: "2024",
    duration: "2h30m",
    videoUrls: {
      "4K": "https://www.youtube.com/watch?v=7KrKivj11o8",
      "1080p": "https://www.youtube.com/watch?v=5qls34NYAOI",
      "720p": "https://www.youtube.com/watch?v=1h9_gp0xuKU"
    }
  },
  {
    id: 18,
    title: "Ayalaan",
    image: img18,
    description: "An adventure about an alien who lands on Earth.",
    quality: "4K",
    genre: "Science Fiction",
    year: "2024",
    duration: "2h30m",
    videoUrls: {
      "4K": "https://www.youtube.com/watch?v=kN_Co0_wC38",
      "1080p": "https://www.youtube.com/watch?v=5qls34NYAOI",
      "720p": "https://www.youtube.com/watch?v=1h9_gp0xuKU"
    }
  },
  {
    id: 19,
    title: "Avengers: Infinity War",
    image: img19,
    description: "Earth's mightiest heroes must stop Thanos from collecting all the Infinity Stones.",
    quality: "1080p",
    genre: "Superhero",
    year: "2018",
    duration: "2h29m",
    videoUrls: {
      "4K": "https://www.youtube.com/watch?v=6ZfuNTqbHE8",
      "1080p": "https://www.youtube.com/watch?v=5qls34NYAOI",
      "720p": "https://www.youtube.com/watch?v=1h9_gp0xuKU"
    }
  },
  {
    id: 20,
    title: "2012",
    image: img20,
    description: "A disaster film about the end of the world.",
    quality: "4K",
    genre: "Action",
    year: "2009",
    duration: "2h38m",
    videoUrls: {
      "4K": "https://www.youtube.com/watch?v=8lY5j-0xlKo",
      "1080p": "https://www.youtube.com/watch?v=5qls34NYAOI",
      "720p": "https://www.youtube.com/watch?v=1h9_gp0xuKU"
    }
  },

    {
      id: 21,
      title: "DD Returns",
      image: img21,
      description: "A comedy about a con artist returning to his old ways.",
      quality: "720p",
      genre: "Comedy",
      year: "2024",
      duration: "2h00m",
      videoUrls: {
        "4K": "https://www.youtube.com/watch?v=TyCQ4sQuI78",
        "1080p": "https://www.youtube.com/watch?v=TyCQ4sQuI78",
        "720p": "https://www.youtube.com/watch?v=TyCQ4sQuI78"
      }
    },
    {
      id: 22,
      title: "The Conjuring",
      image: img22,
      description: "A paranormal investigation goes terrifyingly wrong.",
      quality: "1080p",
      genre: "Horror",
      year: "2013",
      duration: "1h52m",
      videoUrls: {
        "4K": "https://www.youtube.com/watch?v=9i_1o9e0qXY",
        "1080p": "https://www.youtube.com/watch?v=9i_1o9e0qXY",
        "720p": "https://www.youtube.com/watch?v=9i_1o9e0qXY"
      }
    },
    {
      id: 23,
      title: "Talk to Me",
      image: img23,
      description: "A psychological thriller that delves into mind games.",
      quality: "720p",
      genre: "Thriller",
      year: "2024",
      duration: "1h35m",
      videoUrls: {
        "4K": "https://www.youtube.com/watch?v=3_0rryC_UH8",
        "1080p": "https://www.youtube.com/watch?v=3_0rryC_UH8",
        "720p": "https://www.youtube.com/watch?v=3_0rryC_UH8"
      }
    },
    {
      id: 24,
      title: "The Nun",
      image: img24,
      description: "A priest and a novice investigate a haunted abbey.",
      quality: "1080p",
      genre: "Horror",
      year: "2018",
      duration: "1h36m",
      videoUrls: {
        "4K": "https://www.youtube.com/watch?v=rfJYVPANx0A",
        "1080p": "https://www.youtube.com/watch?v=rfJYVPANx0A",
        "720p": "https://www.youtube.com/watch?v=rfJYVPANx0A"
      }
    },
    {
      id: 25,
      title: "Dead Silence",
      image: img25,
      description: "A chilling horror about a vengeful spirit.",
      quality: "4K",
      genre: "Horror",
      year: "2007",
      duration: "1h29m",
      videoUrls: {
        "4K": "https://www.youtube.com/watch?v=2h4UyLVZnbk",
        "1080p": "https://www.youtube.com/watch?v=2h4UyLVZnbk",
        "720p": "https://www.youtube.com/watch?v=2h4UyLVZnbk"
      }
    },
    {
      id: 26,
      title: "The Garfield Movie",
      image: img26,
      description: "The beloved lasagna-loving cat is back.",
      quality: "4K",
      genre: "Comedy",
      year: "2004",
      duration: "1h20m",
      videoUrls: {
        "4K": "https://www.youtube.com/watch?v=UhkWZlP2pxM",
        "1080p": "https://www.youtube.com/watch?v=UhkWZlP2pxM",
        "720p": "https://www.youtube.com/watch?v=UhkWZlP2pxM"
      }
    },
    {
      id: 27,
      title: "Kung Fu Panda 4",
      image: img27,
      description: "Po returns for another kung fu adventure.",
      quality: "720p",
      genre: "Animated",
      year: "2024",
      duration: "1h45m",
      videoUrls: {
        "4K": "https://www.youtube.com/watch?v=5_h9XoM7wrE",
        "1080p": "https://www.youtube.com/watch?v=5_h9XoM7wrE",
        "720p": "https://www.youtube.com/watch?v=5_h9XoM7wrE"
      }
    },
    {
      id: 28,
      title: "Spiderman Across the Spider-Verse",
      image: img28,
      description: "Miles Morales embarks on a new adventure through the multiverse.",
      quality: "4K",
      genre: "Superhero",
      year: "2023",
      duration: "2h10m",
      videoUrls: {
        "4K": "https://www.youtube.com/watch?v=Q3w4MynLSaM",
        "1080p": "https://www.youtube.com/watch?v=Q3w4MynLSaM",
        "720p": "https://www.youtube.com/watch?v=Q3w4MynLSaM"
      }
    },
    {
      id: 29,
      title: "Inside Out 2",
      image: img29,
      description: "The emotions face new challenges as a new emotion, Anxiety, joins the team.",
      quality: "1080p",
      genre: "Animated",
      year: "2024",
      duration: "1h45m",
      videoUrls: {
        "4K": "https://www.youtube.com/watch?v=zkdF9l2I7r4",
        "1080p": "https://www.youtube.com/watch?v=zkdF9l2I7r4",
        "720p": "https://www.youtube.com/watch?v=zkdF9l2I7r4"
      }
    },
    {
      id: 30,
      title: "The Lion King",
      image: img30,
      description: "The epic tale of a young lion cub's journey to reclaim his kingdom.",
      quality: "1080p",
      genre: "Animated",
      year: "2024",
      duration: "1h45m",
      videoUrls: {
        "4K": "https://www.youtube.com/watch?v=6hZQeHT9m1M",
        "1080p": "https://www.youtube.com/watch?v=6hZQeHT9m1M",
        "720p": "https://www.youtube.com/watch?v=6hZQeHT9m1M"
      }
    },
    {
      id: 31,
      title: "Iron Man",
      image: img31,
      description: "A billionaire engineer becomes a superhero with a high-tech suit.",
      quality: "4K",
      genre: "Action",
      year: "2008",
      duration: "2h06m",
      videoUrls: {
        "4K": "https://www.youtube.com/watch?v=8hYl9o9A9f4",
        "1080p": "https://www.youtube.com/watch?v=8hYl9o9A9f4",
        "720p": "https://www.youtube.com/watch?v=8hYl9o9A9f4"
      }
    },
    {
      id: 32,
      title: "Avengers: Infinity War",
      image: img32,
      description: "Earth's mightiest heroes must stop Thanos from collecting all the Infinity Stones.",
      quality: "1080p",
      genre: "Superhero",
      year: "2018",
      duration: "2h29m",
      videoUrls: {
        "4K": "https://drive.google.com/file/d/1tHhJabyrzCjVfGU_h_MGqG3ihvm9ZKte/view?usp=sharing",
        "1080p": "hhttps://drive.google.com/file/d/1tHhJabyrzCjVfGU_h_MGqG3ihvm9ZKte/view?usp=sharing",
        "720p": "https://drive.google.com/file/d/1tHhJabyrzCjVfGU_h_MGqG3ihvm9ZKte/view?usp=sharing"
      }
    },
    {
      id: 33,
      title: "Jurassic Park",
      image: img33,
      description: "A theme park showcasing cloned dinosaurs turns deadly.",
      quality: "4K",
      genre: "Science Fiction",
      year: "1993",
      duration: "2h07m",
      videoUrls: {
        "4K": "https://drive.google.com/file/d/1DZx1hy814rpTKMqr6YmPkSjfIYMT36Fb/view?usp=sharing",
        "1080p": "https://youtu.be/zjhCB_OjIPs?si=nNxyEJEr9KHnFt-w",
        "720p": "https://drive.google.com/file/d/1DZx1hy814rpTKMqr6YmPkSjfIYMT36Fb/view?usp=sharing"
      }
    },
    {
      id: 34,
      title: "Spider-Man: No Way Home",
      image: img34,
      description: "Peter Parker deals with the aftermath of his identity being revealed.",
      quality: "4K",
      genre: "Superhero",
      year: "2021",
      duration: "2h28m",
      videoUrls: {
        "4K": "https://www.youtube.com/watch?v=rt-2w6m6UoI",
        "1080p": "https://www.youtube.com/watch?v=rt-2w6m6UoI",
        "720p": "https://www.youtube.com/watch?v=rt-2w6m6UoI"
      }
    },
    {
      id: 35,
      title: "Doctor Strange in the Multiverse of Madness",
      image: img35,
      description: "Doctor Strange navigates the multiverse to save reality.",
      quality: "4K",
      genre: "Superhero",
      year: "2022",
      duration: "2h06m",
      videoUrls: {
        "4K": "https://www.youtube.com/watch?v=Nt9L1j6R4i0",
        "1080p": "https://www.youtube.com/watch?v=Nt9L1j6R4i0",
        "720p": "https://www.youtube.com/watch?v=Nt9L1j6R4i0"
      }
    }
  ];
  


const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  const [language, setLanguage] = useState('English');
  const [subtitles, setSubtitles] = useState(false);
  const [quality, setQuality] = useState(movie ? movie.quality : '1080p');
  const [videoUrl, setVideoUrl] = useState(movie ? movie.videoUrls[quality] : '');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSubtitlesToggle = () => {
    setSubtitles(!subtitles);
  };

  const handleQualityChange = (event) => {
    const selectedQuality = event.target.value;
    setQuality(selectedQuality);
    const url = movie.videoUrls[selectedQuality] || '';
    setVideoUrl(url);
  };

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail">
      <div className="movie-image">
        <img src={movie.image} alt={movie.title} />
      </div>
      <div className="movie-info">
        <div className="movie-title">{movie.title}</div>
        <div className="movie-details">
          <span className="badge">{quality}</span>
          <span>{movie.genre}</span>
          <span>{movie.year}</span>
          <span>{movie.duration}</span>
        </div>
        <div className="movie-description">{movie.description}</div>
        
        {/* New Features */}
        <div className="movie-actions">
          <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="watch-button">
            <center>Watch Now</center>
          </a>
        </div>

        <div className="movie-settings">
          <div className="language-selector">
            <label htmlFor="language">Language:</label>
            <select id="language" value={language} onChange={handleLanguageChange}>
              <option value="English">English</option>
              <option value="தமிழ்">தமிழ்</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
          <div className="subtitle-toggle">
            <label htmlFor="subtitles">Subtitles:</label>
            <input
              type="checkbox"
              id="subtitles"
              checked={subtitles}
              onChange={handleSubtitlesToggle}
            />
            <span>{subtitles ? 'Enabled' : 'Disabled'}</span>
          </div>
          <div className="quality-selector">
            <label htmlFor="quality">Video Quality:</label>
            <select id="quality" value={quality} onChange={handleQualityChange}>
              <option value="4K">4K</option>
              <option value="1080p">1080p</option>
              <option value="720p">720p</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;