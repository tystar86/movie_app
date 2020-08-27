import axios from 'axios';
import movieData from '../server/data.json';

export const MOVIE_DATA = []

const BASE_URL = 'http://localhost:3000';

const CATEGORY_DATA = [
  {id: "0", name: "all"},
  {id: "1", name: "drama"},
  {id: "2", name: "action"},
  {id: "3", name: "crime"},
  {id: "4", name: "adventure"},
  {id: "5", name: "fantasy"},
]

export const getMovies = () => {
    return axios.get(`${BASE_URL}/api/movies/`).then((response) => {
      return response.data
    })
}

export const getMovieByID = (movieID) => {
  return axios.get(`${BASE_URL}/api/movies/${movieID}`).then((response) => {
    return response.data
  })
}

export const createMovie = (movie) => {
  movie.id = movieData.length + 1
  return axios.post(`${BASE_URL}/api/movies`, movie).then((response) => {
    response.data
  })
}

export const updateMovie = (movie) => {
  return axios.patch(`${BASE_URL}/api/movies/${movie.id}`, movie).then((response) => {
    return response.data
  })
}

export const deleteMovie = (movieID) => {
  return axios.delete(`${BASE_URL}/api/movies/${movieID}`).then((response) => {
    response.data
  })
}

export const getCategories = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(CATEGORY_DATA)
          reject("Can't fetch data!")
      }, 50)
  })
}

export const getPosts = () => {
  return axios.get(`${BASE_URL}/api/posts`).then(response => response.data)
}
