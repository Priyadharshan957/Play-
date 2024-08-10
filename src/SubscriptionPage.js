// src/SubscriptionPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubscriptionPage = () => {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    // Implement your subscription logic here
    // After subscribing, navigate to the previous page or movie detail page
    navigate(-1); // Go back to the previous page
  };

  return (
    <div>
      <h1>Subscription Required</h1>
      <p>Please subscribe to watch this movie.</p>
      <button onClick={handleSubscribe}>Subscribe</button>
    </div>
  );
};

export default SubscriptionPage;
