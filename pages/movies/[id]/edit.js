import { Component } from "react";
import CreateMovieForm from "../../../components/CreateMovieForm";
import { getMovieByID } from '../../../actions';

class EditMovie extends Component {
    static async getInitialProps({query}) {
        const movie = await getMovieByID(query.id)
        return { movie }
    }

    render() {
        return(
            <div className="container">
                <h1>Edit movie</h1>
                {JSON.stringify(this.props.movie)}
                <CreateMovieForm initialData={this.props.movie}/>
            </div>
        )
    }
}

export default EditMovie;