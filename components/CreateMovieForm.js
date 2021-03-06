import { useState } from 'react';

const CreateMovieForm = ({handleFormSubmit, initialData, submitButtonText}) => {
    const formData = initialData ? {...initialData} : {
        name: "",
        releaseYear: "",
        description: "",
        longDescription: "",
        rating: "",
        image: "",
        imageCover: "",
    }
    const [form, setForm] = useState(formData);
    const handleChange = (event) => {
        const { target } = event

        setForm({
            ...form,
            [target.name]: target.value
        })
    };
    const handleCategoryChange = (event) => {
        const { options } = event.target;
        const optionsLength = options.length;
        let values = [];

        for (let i=0; i < optionsLength; i++) {
            if (options[i].selected) {
                values.push(options[i].value)
            }
        }

        setForm({
            ...form,
            category : values.toString()
        })
    };

    const submitForm = () => {
        handleFormSubmit({...form})
    }
    return(
        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    value={form.name}
                    name="name"
                    onChange={handleChange}
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Lord of the Rings"
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    value={form.description}
                    name="description"
                    onChange={handleChange}
                    className="form-control"
                    id="description"
                    placeholder="Somewhere in Middle-earth..."
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Rating</label>
                <input
                    type="number"
                    value={form.rating}
                    name="rating"
                    onChange={handleChange}
                    max="5"
                    min="0"
                    className="form-control"
                    id="rating"
                    placeholder="3"
                />
                <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    value={form.image}
                    name="image"
                    onChange={handleChange}
                    className="form-control"
                    id="image"
                    placeholder="http://....."
                />
            </div>
            <div className="form-group">
                <label htmlFor="cover">Cover</label>
                <input
                    type="text"
                    value={form.imageCover}
                    name="imageCover"
                    onChange={handleChange}
                    className="form-control"
                    id="cover"
                    placeholder="http://......"
                />
            </div>
            <div className="form-group">
                <label htmlFor="longDesc">Long Description</label>
                <textarea
                    className="form-control"
                    value={form.longDescription}
                    name="longDescription"
                    onChange={handleChange}
                    id="longDesc"
                    rows="3"
                >
                </textarea>
            </div>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select multiple className="form-control" id="category" onChange={handleCategoryChange}>
                <option>drama</option>
                <option>music</option>
                <option>adventure</option>
                <option>historical</option>
                <option>action</option>
                </select>
            </div>
            <button type="button" onClick={submitForm} className="btn btn-primary">{submitButtonText}</button>
        </form>
    )
};

export default CreateMovieForm;