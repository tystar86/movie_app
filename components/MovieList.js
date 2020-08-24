import { Component } from "react";
import Link from 'next/link';

class MovieList extends Component {
    shortenText(text, maxLength) {
        if (text && text.length > maxLength) {
            return(text.substring(0, maxLength) + "...")
        }
        return(text)
    }
    renderMovies(movies) {
      return movies.map(movie => 
        (
            <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <Link href="/movies/[id]" as={`movies/${movie.id}`}>
                        <a><img className="card-img-top" src={movie.image} alt={movie.name} /></a>
                    </Link>
                  
                    <div className="card-body">
                        <h4 className="card-title">
                            <Link href="/movies/[id]" as={`movies/${movie.id}`}><a>{movie.name}</a></Link>
                        </h4>
                        <h5>{movie.genre}</h5>
                        <h5>{movie.releaseYear}</h5>
                        <p className="card-text">{this.shortenText(movie.description, 200)}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{movie.rating}</small>
                    </div>
                </div>
                <style jsx>{`
                .card-img-top {
                    max-height: 130px;
                }`}</style>
            </div>
        )
      )
    }
    render() {
        const movies = this.props.movies
        return(
            <div className="row">
                { this.renderMovies(movies) }
            </div>
        )
    }
};

export default MovieList;