import React, { useState, useEffect } from 'react';
import { FaEdit, FaSpinner } from 'react-icons/fa';
import axios from 'axios';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [subscription, setSubscription] = useState('No active plan');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');
    const storedContact = localStorage.getItem('contact');
    const storedSubscription = localStorage.getItem('subscription');

    setName(storedName || '');
    setEmail(storedEmail || '');
    setContact(storedContact || '');
    setSubscription(storedSubscription || 'No active plan');

    // Automatically fetch subscription on mount if email exists
    if (storedEmail) {
      handleSubscriptionChange();
    }
  }, []);

  const handleLogout = () => {
    document.cookie = 'authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    localStorage.clear();
    window.location.href = '/login';
  };

  const handleEditName = () => {
    const newName = prompt('Enter your new name', name);
    if (newName) {
      setName(newName);
      localStorage.setItem('name', newName);
    }
  };

  const handleSubscriptionChange = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/stripe/subscription', {
        params: { email },
      });

      if (response.data.subscriptionStatus) {
        const status = `Status: ${response.data.subscriptionStatus}`;
        let subscriptionInfo = status;

        if (response.data.subscriptionStatus === 'active' && response.data.plans?.length > 0) {
          const plansInfo = response.data.plans
            .map((p) => `${p.name} - ${p.amount} ${p.currency}/${p.interval}`)
            .join(', ');
          subscriptionInfo += `, Plan(s): ${plansInfo}`;
        }

        setSubscription(subscriptionInfo);
        localStorage.setItem('subscription', subscriptionInfo);
      } else {
        setSubscription('No active subscription found');
        localStorage.setItem('subscription', 'No active subscription found');
      }
    } catch (error) {
      console.error('Error fetching subscription:', error);
      setSubscription('Error retrieving subscription');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="profile_section home_banner">
      <div className="container text-center mt-5 text-white">
        <div className="profile-banner py-5 mb-5">
          <h1>Welcome, {name}!</h1>
          <p>Your personalized profile section</p>
        </div>

        {/* <div className="mt-5">
          <h3 className="text-left mb-4">User Details</h3>
          <div className="profile-card">
            <div className="row">
              <div className="col-md-6">
                <strong>Name</strong>
                <div className="d-flex align-items-center">
                  <h4>{name}</h4>
                  <FaEdit className="edit-icon ms-2" onClick={handleEditName} />
                </div>
              </div>
              <div className="col-md-6">
                <strong>Email</strong>
                <p>{email}</p>
              </div>
              <div className="col-md-6">
                <strong>Contact</strong>
                <p>{contact}</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="mt-5">
          <h3 className="text-left mb-4">Subscription Details</h3>
          <div className="subscription-info">
            <p><strong>{subscription}</strong></p>
            <button
              className="btn btn-primary w-100"
              onClick={handleSubscriptionChange}
              disabled={loading}
            >
              {loading ? <FaSpinner className="spinner-icon" /> : 'Refresh Subscription Status'}
            </button>
          </div>
        </div> */}

        <div className="mt-5">
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;