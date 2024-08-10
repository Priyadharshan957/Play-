import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Swiper/Swiperr.css';
import im3 from '../Images/sw1.mp4';
import im4 from '../Images/sw2.mp4';
import im5 from '../Images/sw3.mp4';
import im6 from '../Images/sw4.mp4';
import im7 from '../Images/sw5.mp4';

// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Swiperr = () => {
  const videoRefs = useRef([]);
  const swiperRef = useRef(null); // Ref to Swiper instance
  const [isMuted, setIsMuted] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Handle slide change and pause videos
  const handleSlideChange = (swiper) => {
    // Pause all videos and reset current slide video to start
    videoRefs.current.forEach(video => {
      if (video) {
        video.pause();
        video.currentTime = 0; // Reset video to start
      }
    });

    // Play the video of the current slide
    const currentSlideVideo = videoRefs.current[swiper.activeIndex];
    if (currentSlideVideo) {
      currentSlideVideo.play();
    }
  };

  // Toggle mute for videos
  const handleMuteToggle = () => {
    setIsMuted(prevIsMuted => {
      const newMuteState = !prevIsMuted;
      videoRefs.current.forEach(video => {
        if (video) {
          video.muted = newMuteState;
        }
      });
      return newMuteState;
    });
  };

  // Setup Swiper instance
  const onSwiper = (swiper) => {
    swiperRef.current = swiper; // Access the Swiper instance
  };

  useEffect(() => {
    // Create an IntersectionObserver to detect when the Swiper component is in the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Swiper is in view, unmute videos
            setIsMuted(false);
          } else {
            // Swiper is out of view, mute videos
            setIsMuted(true);
          }
        });
      },
      {
        threshold: 0.1, // Adjust this threshold as needed
      }
    );

    // Observe the Swiper component
    const swiperElement = document.querySelector('.swiper-container');
    if (swiperElement) {
      observer.observe(swiperElement);
    }

    // Cleanup observer on unmount
    return () => {
      if (swiperElement) {
        observer.unobserve(swiperElement);
      }
    };
  }, []);

  // Movie data
  const movies = [
    { name: "Deadpool & Wolverine", releaseDate: "2024", description: "An epic crossover between Deadpool and Wolverine.", src: im3 },
    { name: "Thug Life", releaseDate: "2025", description: "A gripping tale of life on the edge.", src: im4 },
    { name: "Avengers: DOOMDAYS", releaseDate: "2026", description: "The Avengers face their toughest challenge yet.", src: im5 },
    { name: "Dhuruvangal Natchathiram", releaseDate: "2025", description: "A suspenseful thriller from the renowned director.", src: im6 },
    { name: "Venom: The Last Dance", releaseDate: "2024", description: "Venom returns for a final showdown.", src: im7 }
  ];

  return (
    <div className="swiper-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 16000, // Auto-slide delay of 16 seconds
          disableOnInteraction: false, // Continue autoplay after interaction
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
        onInit={onSwiper} // Access the Swiper instance on initialization
      >
        {movies.map((movie, index) => (
          <SwiperSlide
            key={index}
            style={{ height: "500px" }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <video
              ref={el => videoRefs.current[index] = el}
              src={movie.src}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              autoPlay
              loop
              muted={isMuted}
            />
            {hoveredIndex === index && (
              <div className="info-overlay">
                <h3>{movie.name}</h3>
                <p>{movie.releaseDate}</p>
                <p className="description">{movie.description}</p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <button onClick={handleMuteToggle} className="mute-button">
        {isMuted ? (
          <span role="img" aria-label="Unmute">🔇</span> // Display muted speaker icon when muted (click to unmute)
        ) : (
          <span role="img" aria-label="Mute">🔊</span> // Display speaker icon when unmuted (click to mute)
        )}
      </button>
    </div>
  );
};

export default Swiperr;
