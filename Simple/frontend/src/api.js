import axios from 'axios';

// Create an instance of axios with the base URL
const api = axios.create({
  baseURL: "http://0.0.0.0:8000"
});

// Export the Axios instance
export default api;