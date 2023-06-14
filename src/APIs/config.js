import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'a597cd351558d258e4db0b91856bf5a9'
  }
});