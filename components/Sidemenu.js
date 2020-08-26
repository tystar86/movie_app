import Modal from './Modal';
import CreateMovieForm from './CreateMovieForm';
import { createMovie } from '../actions';
import { useRouter } from 'next/router';

const Sidemenu = ({categories, changeCategory, activeCategory}) => {
    let modal = null
    const router = useRouter()
    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movie) => {
           modal.closeModal()
           router.push('/')
        })
    }

    return(
        <div className="col-lg-3">
            <Modal ref={element => modal = element} hasSubmit={false}>
                <CreateMovieForm handleFormSubmit={handleCreateMovie} submitButtonText="Create"/>
            </Modal>
            <div className="list-group">
              { categories.map(category =>
                (
                    <a onClick={() => changeCategory(category.name)}
                        href="#"
                        className={`list-group-item ${activeCategory === category.name ? 'active' : ''}`}
                        key={category.id}>
                    {category.name}
                    </a>)
                )}
            </div>
        </div>
    )
};

export default Sidemenu;