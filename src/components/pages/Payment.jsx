import React from 'react';
import { useStripe, useElements, Elements } from '@stripe/react-stripe-js';

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe.js has not loaded yet.');
      return;
    }

    // Example: Assuming you're using PaymentElement or CardElement
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/profile', // Redirect to profile after payment
      },
    });

    if (error) {
      console.error('Payment error:', error.message);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      // Payment succeeded, fetch subscription details
      try {
        const response = await fetch('http://localhost:5000/api/stripe/payment-success', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              paymentIntentId: paymentIntent.id,
              email: localStorage.getItem('email'),
            }),
          });

        const data = await response.json();
        if (data.subscription) {
          localStorage.setItem('subscription', data.subscription.plan.name); // Store plan name temporarily
          window.location.href = '/profile'; // Redirect to profile page
        }
      } catch (err) {
        console.error('Error saving payment data:', err);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2>Payment Page</h2>
      <form onSubmit={handleSubmit}>
        {/* Add your Stripe Payment Element here */}
        {/* For simplicity, assuming you're using a basic button for testing */}
        <button type="submit" className="btn btn-success" disabled={!stripe}>
          Pay Now
        </button>
      </form>
    </div>
  );
};

// Wrap Payment component with Elements (already done in Main.js)
export default Payment;