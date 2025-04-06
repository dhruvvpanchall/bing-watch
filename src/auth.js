// Store token in localStorage after login
export const setAuthToken = (token) => {
    localStorage.setItem('authToken', token);
  };
  
  // Retrieve token
  export const getAuthToken = () => {
    return localStorage.getItem('authToken');
  };
  
  // Remove token on logout
  export const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    window.location.href = '/login'; // Redirect to login page
  };
  
  // Check if the user is authenticated
  export const isAuthenticated = () => {
    return !!getAuthToken(); // Returns true if token exists
  };
  