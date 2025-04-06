import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://server-r7k9.onrender.com/api';

// User APIs
export const signup = (userData) => axios.post(`${API_BASE_URL}/signup`, userData);
export const login = (userData) => axios.post(`${API_BASE_URL}/login`, userData);

// Movies API
export const fetchMovies = () => axios.get(`${API_BASE_URL}/movie_shows_details_page`);
export const fetchReviews = () => axios.get(`${API_BASE_URL}/reviews`);

// Stripe Payment API
export const processPayment = (paymentData) => axios.post(`${API_BASE_URL}/stripe/payment`, paymentData);
