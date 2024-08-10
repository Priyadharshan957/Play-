import React from 'react';
import '../Pay/Payment.css'; 
import im from '../Images/bg.jpg';
import Nav from '../Component/Nav';
import { useLocation, useNavigate } from 'react-router';
import image from '../Images/logo.png'; 

const Payment = () => {
  const nav = useNavigate();
  const location = useLocation();
  const { plan } = location.state || {};  // Get the plan from the state

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_GcZZFDPP0jHtC4', 
      amount: plan === 'essential' ? 29900 : plan === 'extra' ? 49900 : 79900, 
      currency: 'INR',
      name: 'Play+',
      description: `${plan} Plan Payment`,
      image: image,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        nav("/last");
      },
      prefill: {
        name: 'Tony Stark',
        email: 'Tonystark@example.com',
        contact: '91300040030'
      },
      notes: {
        address: 'Razorpay Corporate Office'
      },
      theme: {
        color: '#F37254'
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <body style={{
      backgroundImage: `url(${im})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}>
      <Nav />
      <div className="container-ii">
        <h1>Make a Payment for {plan} Plan</h1>  {/* Display the plan */}
        <br />
        <br />
        <br />
        <button className="pay-now-button" onClick={handlePayment}>Pay Now</button>

      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </body>
  );
}

export default Payment;
