import React from 'react';

import Sidemenu from '../components/Sidemenu';
import Carousel from '../components/Carousel';
import MovieList from '../components/MovieList';

import { getMovies, getCategories } from '../actions';

const Home = ({movies, images, categories}) => {
  return(
    <div>
        <div className="home-page">
            <div className="container">
                <div className="row">
                    <Sidemenu categories={categories || []}/>
                    <div className="col-lg-9">
                        <Carousel  images={images || []}/>
                        <MovieList movies={movies || []}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

Home.getInitialProps = async () => {
  const movies = await getMovies();
  const categories = await getCategories();
  const images = movies.map(movie => (
      {
        id: `image-${movie.id}`,
        name: movie.name,
        coverUrl: movie.imageCover,
      }
  ))

  return {movies, images, categories};
}

export default Home