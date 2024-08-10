import React, { useEffect, useState } from 'react';
import '../Price/Pricing.css';
import { useNavigate } from 'react-router-dom';

import im from '../Images/bg.jpg';
import Footer from '../Footer/Footer';
import Nav from '../Component/Nav';

const Pricing = () => {
  const navigate = useNavigate();

  const Click = (plan) => {
    navigate(`/pay`, { state: { plan } });
  };

  const [l1, setL1] = useState(localStorage.getItem('logg') || 'logout');
  useEffect(() => {
    setL1(localStorage.getItem('logg') || 'logout');
  }, []);

  return (
    <body
      style={{
        backgroundImage: `url(${im})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Nav />
      <div className='hh'>
        <div
          style={{
            backgroundColor: 'rgb(192,192,192,0.3)',
            color: 'white',
            padding: '50px',
            fontSize: 20
          }}
        >
          <h2>Why Subscribe?</h2>
          <br />
          <h4>Unlimited Access:</h4>
          <p>
            Enjoy unlimited access to our library of movies and series, including new releases and classic favorites, all available at your fingertips.
          </p>
          <br />
          <br />
          <h4>Seamless Streaming:</h4>
          <p>
            Stream movies and series instantly to your device without the need for downloads, powered by cutting-edge streaming technology.
          </p>
          <br />
        </div>
        <div className='plan'>
          <div className='price'>
            <span>
              <br />
              <h1>ESSENTIAL</h1>
              <p>
                <span style={{ color: 'red', fontSize: 40 }}>₹299</span> per month
              </p>
              <dl>
                <br />
                <dt>FEATURES</dt>
                <dd>
                  <ul>
                    <li>Standard streaming quality</li>
                    <li>Access to community forums</li>
                  </ul>
                </dd>
              </dl>
              <br />
              <div className='move'>
                <button onClick={() => Click('essential')} className='button1'>
                  BUY NOW
                </button>
              </div>
            </span>
          </div>

          <div className='price'>
            <span>
              <h1>EXTRA</h1>
              <p>
                <span style={{ color: 'red', fontSize: 40 }}> ₹499 </span>per month
              </p>
              <dl>
                <dt className='bold'>FEATURES</dt>
                <dd>
                  <ul>
                    <li>High-definition streaming quality up to 2K</li>
                    <li>Exclusive discounts on rental movie purchases</li>
                    <li>Access to community forums and events</li>
                  </ul>
                </dd>
              </dl>
              <br />
              <div className='move'>
                <button onClick={() => Click('extra')} className='button1'>
                  BUY NOW
                </button>
              </div>
            </span>
          </div>

          <div className='price'>
            <h1>DELUXE</h1>
            <p>
              <span style={{ color: 'red', fontSize: 40 }}> ₹799 </span>per month
            </p>
            <dl>
              <dt>FEATURES</dt>
              <dd>
                <ul>
                  <li>Ultra-high-definition streaming quality up to 4K</li>
                  <li>Exclusive early access to new releases</li>
                  <li>Access to VIRTUAL REALITY (VR) content</li>
                  <li>Access all movies and series at 60FPS</li>
                  <li>Priority customer support</li>
                </ul>
              </dd>
            </dl>
            <div className='move'>
              <button onClick={() => Click('deluxe')} className='button1'>
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </body>
  );
};

export default Pricing;
