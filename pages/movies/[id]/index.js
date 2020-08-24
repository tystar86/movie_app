import { getMovieByID, deleteMovie } from '../../../actions';
import { useRouter } from 'next/router';

const Movie = (props) => {
    const { movie } = props;
    const router = useRouter();
    const handleDeleteMovie = (id) => {
        deleteMovie(id).then(() => {
            router.push('/')
        })
    }

    return(
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">{movie.name}</h1>
                <p className="lead">{movie.description}</p>
                <p>{movie.genre}</p>
                <button className="btn btn-primary btn-lg mr-1" href="#" role="button">Learn more...</button>
                <button onClick={() => handleDeleteMovie(movie.id)} className="btn btn-danger btn-lg mr-1" href="#" role="button">Delete movie</button>
                <button onClick={() => router.push(`/movies/${movie.id}/edit`)} className="btn btn-warning btn-lg" href="#" role="button">Edit movie</button>
            </div>
            <p className="longDescription">{movie.longDescription}</p>
            <style jsx>{`
            .longDescription {
                font-size: 20px;
            }`}</style>
        </div>
    )
};

Movie.getInitialProps = async (context) => {
    const movie = await getMovieByID(context.query.id);
    return {movie};
}

export default Movie;