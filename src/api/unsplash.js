import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 4defcaa051d1b17913044be495b1690f0176ec4b4862d5f27b7d816325aedac1',
  },
});
