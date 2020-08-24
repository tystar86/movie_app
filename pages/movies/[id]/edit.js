import { Component } from "react";
import CreateMovieForm from "../../../components/CreateMovieForm";
import { getMovieByID } from '../../../actions';

class EditMovie extends Component {
    static getInitialProps({query}) {
        return {query}
    }

    state = {
        movie: {}
    }

    componentDidMount() {
        const { id } = this.props.query;
        getMovieByID(id).then((movie) => {
            this.setState({movie})
        })
    }
    render() {
        return(
            <div className="container">
                <h1>Edit movie</h1>
                {JSON.stringify(this.state.movie)}
                <CreateMovieForm initialData={this.state.movie}/>
            </div>
        )
    }
}

export default EditMovie;