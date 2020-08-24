import Modal from './Modal';
import CreateMovieForm from './CreateMovieForm';
import { createMovie } from '../actions';
import { useRouter } from 'next/router';

const Sidemenu = ({categories}) => {
    let modal = null
    const router = useRouter()
    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies) => {
           console.log(JSON.stringify(movies))
           modal.closeModal()
           router.push('/')
        })
    }


    return(
        <div className="col-lg-3">
            <Modal ref={element => modal = element} hasSubmit={false}>
                <CreateMovieForm handleFormSubmit={handleCreateMovie}/>
            </Modal>
            <h1 className="my-4">TMDB</h1>
            <div className="list-group">
              { categories.map(category =>
                (<a href="#" className="list-group-item" key={category.id}>{category.name}</a>)
                )}
            </div>
        </div>
    )
};

export default Sidemenu;