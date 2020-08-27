import { Component } from "react";
import CreateMovieForm from "../../../components/CreateMovieForm";
import { getMovieByID, updateMovie } from '../../../actions';
import Router from 'next/router';

class EditMovie extends Component {
    static async getInitialProps({query}) {
        const movie = await getMovieByID(query.id)
        return { movie }
    }

    handleUpdateMovie(movie) {
        updateMovie(movie).then((movie) => {
        //    TODO: modal.closeModal()
            Router.push('/movies/[id]', `/movies/${movie.id}`)
        })
    }

    render() {
        return(
            <div className="container">
                <h1>Edit movie</h1>
                <CreateMovieForm initialData={this.props.movie} handleFormSubmit={this.handleUpdateMovie} submitButtonText="Update"/>
            </div>
        )
    }
}

export default EditMovie;