import { useState } from 'react';

import Sidemenu from '../components/Sidemenu';
import Carousel from '../components/Carousel';
import MovieList from '../components/MovieList';

import { getMovies, getCategories } from '../actions';

const Home = ({movies, images, categories}) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const changeCategory = (category) => {
    setActiveCategory(category)
  }
  const filterMovies = (activeCategory, movies) => {
    if (activeCategory) {
      return movies
    }
    return movies.filter((movie) => {
      return movie.category && movie.category.includes(activeCategory)
    })
  }

  return(
    <div>
        <div className="home-page">
            <div className="container">
                <div className="row">
                    <Sidemenu
                      categories={categories || []}
                      changeCategory={changeCategory}
                      activeCategory={activeCategory}
                    />
                    <div className="col-lg-9">
                        <Carousel  images={images || []}/>
                          {activeCategory ? <h1>{activeCategory} movies</h1> : null}
                        <MovieList movies={filterMovies(activeCategory, movies) || []}/>
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