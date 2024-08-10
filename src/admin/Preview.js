// src/components/Preview.js
import React from 'react';
import './Preview.css';

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


const Preview = () => {
  // Dummy data for movies
  const movies = [
    {
      id: 1,
      title: "The Goat Life",
      image: img1,
      description: "A documentary on the life and habits of goats.",
      quality: "1080p",
      genre: "Documentary",
      year: "2021",
      duration: "1h30m"
    },
    {
      id: 2,
      title: "Spiderman Across the Spider-Verse",
      image: img2,
      description: "Miles Morales embarks on a new adventure through the multiverse.",
      quality: "4K",
      genre: "Superhero",
      year: "2023",
      duration: "2h10m"
    },
    {
      id: 3,
      title: "Laapataa Ladies",
      image: img3,
      description: "A story of two women on a journey of self-discovery.",
      quality: "4K",
      genre: "Drama",
      year: "2024",
      duration: "2h15m"
    },
    {
      id: 4,
      title: "Avesham",
      image: img4,
      description: "A thrilling tale of revenge and redemption.",
      quality: "720p",
      genre: "Thriller",
      year: "2023",
      duration: "2h10m"
    },
    {
      id: 5,
      title: "The Garfield Movie",
      image: img5,
      description: "The beloved lasagna-loving cat is back.",
      quality: "4K",
      genre: "Comedy",
      year: "2004",
      duration: "1h20m"
    },
    {
      id: 6,
      title: "The Garfield Movie",
      image: img6,
      description: "The beloved lasagna-loving cat is back.",
      quality: "4K",
      genre: "Comedy",
      year: "2004",
      duration: "1h20m"
    },
    {
      id: 7,
      title: "Garudan",
      image: img7,
      description: "A mystery thriller revolving around a police investigation.",
      quality: "720p",
      genre: "Thriller",
      year: "2024",
      duration: "2h30m"
    },
    {
      id: 8,
      title: "The Goat Life",
      image: img8,
      description: "A documentary on the life and habits of goats.",
      quality: "1080p",
      genre: "Documentary",
      year: "2021",
      duration: "1h30m"
    },
    {
      id: 9,
      title: "Inside Out 2",
      image: img9,
      description: "The emotions face new challenges as a new emotion, Anxiety, joins the team.",
      quality: "1080p",
      genre: "Animated",
      year: "2024",
      duration: "1h45m"
    },
    {
      id: 10,
      title: "Laapataa Ladies",
      image: img10,
      description: "A story of two women on a journey of self-discovery.",
      quality: "4K",
      genre: "Drama",
      year: "2024",
      duration: "2h15m"
    },
    {
      id: 11,
      title: "Maharaja",
      image: img11,
      description: "A historical drama about a royal family.",
      quality: "1080p",
      genre: "Drama",
      year: "2024",
      duration: "2h30m"
    },
    {
      id: 12,
      title: "2012",
      image: img12,
      description: "A disaster film about the end of the world.",
      quality: "4K",
      genre: "Action",
      year: "2009",
      duration: "2h38m"
    },
    {
      id: 13,
      title: "Garudan",
      image: img13,
      description: "A mystery thriller revolving around a police investigation.",
      quality: "720p",
      genre: "Thriller",
      year: "2024",
      duration: "2h30m"
    },
    {
      id: 14,
      title: "Godzilla x Kong",
      image: img14,
      description: "Two legendary monsters clash in an epic battle.",
      quality: "4K",
      genre: "Action",
      year: "2021",
      duration: "1h53m"
    },
    {
      id: 15,
      title: "Captain Miller",
      image: img15,
      description: "A biographical war drama about a courageous captain.",
      quality: "1080p",
      genre: "War",
      year: "2024",
      duration: "2h50m"
    },
    {
      id: 16,
      title: "Maanaadu",
      image: img16,
      description: "A time-loop thriller where a man relives the same day.",
      quality: "720p",
      genre: "Thriller",
      year: "2021",
      duration: "2h27m"
    },
    {
      id: 17,
      title: "Kalki AD 2099",
      image: img17,
      description: "A futuristic tale of a hero in a dystopian world.",
      quality: "4K",
      genre: "Science Fiction",
      year: "2024",
      duration: "2h30m"
    },
    {
      id: 18,
      title: "Ayalaan",
      image: img18,
      description: "An adventure about an alien who lands on Earth.",
      quality: "4K",
      genre: "Science Fiction",
      year: "2024",
      duration: "2h30m"
    },
    {
      id: 19,
      title: "Avengers: Infinity War",
      image: img19,
      description: "Earth's mightiest heroes must stop Thanos from collecting all the Infinity Stones.",
      quality: "1080p",
      genre: "Superhero",
      year: "2018",
      duration: "2h29m"
    },
    {
      id: 20,
      title: "2012",
      image: img20,
      description: "A disaster film about the end of the world.",
      quality: "4K",
      genre: "Action",
      year: "2009",
      duration: "2h38m"
    },
    {
      id: 21,
      title: "DD Returns",
      image: img21,
      description: "A comedy about a con artist returning to his old ways.",
      quality: "720p",
      genre: "Comedy",
      year: "2024",
      duration: "2h00m"
    },
    {
      id: 22,
      title: "The Conjuring",
      image: img22,
      description: "A paranormal investigation goes terrifyingly wrong.",
      quality: "1080p",
      genre: "Horror",
      year: "2013",
      duration: "1h52m"
    },
    {
      id: 23,
      title: "Talk to Me",
      image: img23,
      description: "A psychological thriller that delves into mind games.",
      quality: "720p",
      genre: "Thriller",
      year: "2024",
      duration: "1h35m"
    },
    {
      id: 24,
      title: "The Nun",
      image: img24,
      description: "A priest and a novice investigate a haunted abbey.",
      quality: "1080p",
      genre: "Horror",
      year: "2018",
      duration: "1h36m"
    },
    {
      id: 25,
      title: "Dead Silence",
      image: img25,
      description: "A chilling horror about a vengeful spirit.",
      quality: "4K",
      genre: "Horror",
      year: "2007",
      duration: "1h29m"
    },
    {
      id: 26,
      title: "The Garfield Movie",
      image: img26,
      description: "The beloved lasagna-loving cat is back.",
      quality: "4K",
      genre: "Comedy",
      year: "2004",
      duration: "1h20m"
    },
    {
      id: 27,
      title: "Kung Fu Panda 4",
      image: img27,
      description: "Po returns for another kung fu adventure.",
      quality: "720p",
      genre: "Animated",
      year: "2024",
      duration: "1h45m"
    },
    {
      id: 28,
      title: "Spiderman Across the Spider-Verse",
      image: img28,
      description: "Miles Morales embarks on a new adventure through the multiverse.",
      quality: "4K",
      genre: "Superhero",
      year: "2023",
      duration: "2h10m"
    },
    {
      id: 29,
      title: "Inside Out 2",
      image: img29,
      description: "The emotions face new challenges as a new emotion, Anxiety, joins the team.",
      quality: "1080p",
      genre: "Animated",
      year: "2024",
      duration: "1h45m"
    },
    {
      id: 30,
      title: "The Lion King",
      image: img30,
      description: "The epic tale of a young lion cub's journey to reclaim his kingdom.",
      quality: "1080p",
      genre: "Animated",
      year: "2024",
      duration: "1h45m"
    },
    {
      id: 31,
      title: "Iron Man",
      image: img31,
      description: "A billionaire engineer becomes a superhero with a high-tech suit.",
      quality: "4K",
      genre: "Action",
      year: "2008",
      duration: "2h06m"
    },
    {
      id: 32,
      title: "Avengers: Infinity War",
      image: img32,
      description: "Earth's mightiest heroes must stop Thanos from collecting all the Infinity Stones.",
      quality: "1080p",
      genre: "Superhero",
      year: "2018",
      duration: "2h29m"
    },
    {
      id: 33,
      title: "Jurassic Park",
      image: img33,
      description: "A theme park showcasing cloned dinosaurs turns deadly.",
      quality: "4K",
      genre: "Science Fiction",
      year: "1993",
      duration: "2h07m"
    },
    {
      id: 34,
      title: "Spider-Man: No Way Home",
      image: img34,
      description: "Peter Parker deals with the aftermath of his identity being revealed.",
      quality: "4K",
      genre: "Superhero",
      year: "2021",
      duration: "2h28m"
    },
    {
      id: 35,
      title: "Doctor Strange in the Multiverse of Madness",
      image: img35,
      description: "Doctor Strange navigates the multiverse to save reality.",
      quality: "4K",
      genre: "Superhero",
      year: "2022",
      duration: "2h06m"
    }
  ];

  return (
    <div className="preview-container">
      <h2>Preview</h2>
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie-item">
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preview;
